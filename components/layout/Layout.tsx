import React, { ReactElement, useCallback } from 'react';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps): ReactElement {
  const maxWallpaper = 1;

  const randint = useCallback(() => {
    return Math.floor(Math.random() * maxWallpaper) + 1;
  }, []);

  return (
    <div className="relative flex min-h-screen justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/wallpaper${randint()}.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-6 flex h-full min-h-screen w-full max-w-2xl flex-col px-6 py-12">
        {props.children}
      </div>
    </div>
  );
}
