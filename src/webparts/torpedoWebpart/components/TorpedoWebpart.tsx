import * as React from 'react';
import * as myLibrary from 'torpedo-library';

export default function TorpedoWebpart() {

  const myInstance = new myLibrary.TorpedoLibraryLibrary();

  return (
    <section>
      <h3>Torpedo Webpart</h3>
      <h3>{myInstance.getCurrentTime()}</h3>
    </section>
  );
}
