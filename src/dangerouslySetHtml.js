import React from 'react';
import DOMPurify from 'dompurify';

const Test = () => {
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;
  const tempData = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;

  return (
    <>
      <div>{data}</div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tempData) }} />
    </>
  );
};

export default Test;

/*

dangerouslySetInnerHTML is a property that you can use on HTML elements in a React application to programmatically set their content. Instead of using a selector to grab the HTML element, then setting its innerHTML, you can use this property directly on the element.

When dangerouslySetInnerHTML is used, React also knows that the content of that specific element is dynamic, and, for the children of that node, it simply skips the comparison against the virtual DOM to gain some extra performance.

As the name of the property suggests, it can be dangerous to use because it makes your code vulnerable to cross-site scripting (XSS) attacks. This becomes an issue especially if you are fetching data from a third-party source or rendering content submitted by users.

Luckily, there are sanitization tools for HTML, which detect potentially malicious parts in HTML code and then output a clean and safe version of it. The most popular sanitizer for HTML is DOMPurify.

*/
