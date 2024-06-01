import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { BsArrowsAngleExpand } from "react-icons/bs";


const CodeSnippet = () => {
  const codeString = `
    console.log("o008 i1Ll1 g9qGCQ ~~+=>");
    
    function updateGutters(cm) {
      var gutters = cm.display.gutters,
          __specs = cm.options.gutters;
      
      removeChildren(gutters);
      
      for (var i = 0; i < specs.length; ++i) {
        var gutterClass = __specs[i];
        var gElt = gutters.appendChild(
          elt(
            "div",
            null,
            "CodeMirror-gutter " + gutterClass
          )
        );
        if (gutterClass == "CodeMirror-linenumbers") {
          cm.display.lineGutter = gElt;
          gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
        }
      }
      
      gutters.style.display = i ? "" : "none";
      updateGutterSpace(cm);
      
      return false;
    }
  `;

  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState(14);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div>
      <div style={{ marginBottom: '10px', textAlign: "right" }}>
        <CopyToClipboard text={codeString} onCopy={handleCopy}>
          <button>{<HiOutlineClipboardCopy />}</button>
        </CopyToClipboard>
        <button onClick={increaseFontSize} style={{ marginLeft: '10px' }}><BsArrowsAngleExpand /></button>
      </div>
      <SyntaxHighlighter language="javascript" style={tomorrowNight} customStyle={{ fontSize: `${fontSize}px` }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
