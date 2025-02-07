"use client";
import { useOptimistic, useState, useRef } from "react";
import { deliverMessage } from "./Action";

function Thread({
  messages,
  sendMessage,
}: {
  messages: any;
  sendMessage: any;
}) {
  const formRef = useRef<any>(null);
  async function formAction(formData: any) {
    addOptimisticMessage(formData.get("message"));
    if (formRef.current !== null) {
      formRef.current.reset();
    }
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className="flex flex-col gap-2">
      {optimisticMessages.map((message: any, index: any) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef} className="flex flex-col gap-1">
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="bg-gray-200"
        />
        <button type="submit" className="bg-gray-900 text-white">
          Send
        </button>
      </form>
    </div>
  );
}

const UseOptimistic = () => {

  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  async function sendMessage(formData: any) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages: any) => [...messages, { text: sentMessage }]);
  }
  
  return <Thread messages={messages} sendMessage={sendMessage} />;
};

export default UseOptimistic;
