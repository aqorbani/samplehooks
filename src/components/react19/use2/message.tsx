"use client";

import { use, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function Message({ messagePromise }: { messagePromise: any }) {
  const messageContent: any = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({ messagePromise }: { messagePromise: any }) {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<p>⌛Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
