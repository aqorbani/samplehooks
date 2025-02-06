import UseEffect from "@/components/sampleHooks/UseEffect";
import UseState from "@/components/sampleHooks/UseState";
import UseEffect2 from "@/components/sampleHooks/UseEffect2";
import { useUser } from "@/components/sampleHooks/UseContext/UserContext";
import UseLayoutEffect from "@/components/sampleHooks/UseLayoutEffect";
import UseReducer from "@/components/sampleHooks/UseReducer";
import UseRef from "@/components/sampleHooks/UseRef";
import UseRef2 from "@/components/sampleHooks/UseRef2";
import UseRef3 from "@/components/sampleHooks/UseRef3";
import UseId from "@/components/sampleHooks/UseId";
import Parent from "@/components/sampleHooks/UseCallBack/sample01/Parent";
import UseTransition from "@/components/sampleHooks/UseTransitions";
import UseDeferredValue from "@/components/sampleHooks/UseDeferredValue/UseDeferredValue";
import UseActionState from "@/components/sampleHooks/UseActionState/UseActionState";
import UseDebugValue from "@/components/sampleHooks/UseDebugValue/UseDebugValue";
import UseImperativeHandle from "@/components/sampleHooks/UseImperativeHandle/UseImperativeHandle";

export default function Home() {
  // const { user, login, logout } = useUser();
  // console.log("user : " + user);
  // useEffect(() => {
  //   login();
  // }, [user]);
  // console.log("user : " + user);
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 value={4} /> */}
      {/* <UseRef3 /> */}
      {/* <UseId /> */}
      {/* <UseCallBack /> */}
      {/* <Parent /> */}
      {/* <UseTransition /> */}
      {/* <UseDeferredValue /> */}
      {/* <UseActionState /> */}
      {/* <UseDebugValue /> */}
      <UseImperativeHandle />
    </div>
  );
}
