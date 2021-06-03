import React from "react";
import { Document } from 'react-pdf';


function Resume() {
    return (
      <div>
          <h1 style={{color:"white"}}>Resume Page Under Construction</h1>
          <Document
        file="url(/Resume.pdf)"
      >
      </Document>
      </div>
    );
  }
  
  export default Resume;