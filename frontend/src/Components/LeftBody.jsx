import React from 'react'
import { useState } from 'react';
import "../CSS/LeftBody.css"
function LeftBody() {
  const[selected,setselected]= useState("eraser");
  return (
    <div className='left-body'>
        <div className={selected==="pen"?"selected":""} onClick={()=>{setselected("pen")}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 64 64"><path fill="#999999" d="M60.609 3.389c-1.757-1.758-4.528-1.839-6.409-.292l-.829-.829l-2.269 2.281l.192.194l-.806.754l-.183-.176c-1.729-1.731-3.722-3.526-6.375-2.454c-3.609 1.463-5.333 9.273-7.329 12.228c-1.742 2.57-6.112 5.292-10.019 7.343c.195.193.58.771.836.836c1.086-.479 2.192-.906 3.267-1.406c2.244-1.043 4.428-2.258 6.358-3.819c3.95-3.197 5.542-12.783 8.361-12.971c1.179-.085 2.33 1.01 3.306 2.082L28.294 26.25l.806.806L9.407 46.783l-6.188 10.92l.818.818l-1.758 2.333c-.299.352-.369.814-.156 1.027c.209.207.672.137 1.021-.164l2.336-1.752l.817.816l10.92-6.187l19.695-19.727l.016.016l.822.822L59.243 12.69l.219.219l2.267-2.281l-.827-.828c1.548-1.881 1.465-4.652-.293-6.411M6.467 59.537l-2.003-2.003l5.165-9.114l5.952 5.953zm31.284-25.245l-8.038-8.039l1.498-1.48l8.029 8.028zM59.46 11.493l-6.945-6.945l.858-.863l6.943 6.945z"/></svg>
        </div>
        <div className={selected==="eraser"?"selected":""} onClick={()=>{setselected("eraser")}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#999999" d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M213.67 103L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"/></svg>
        </div>
        <div className={selected==="select"?"selected":""} onClick={()=>{setselected("select")}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 320 512"><path fill="#999999" d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5l82.6-94.5l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320h118.1c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9c-4.3-3.8-9.7-5.9-15.4-5.9C10.4 32 0 42.4 0 55.2"/></svg>
        </div>
        <div className={selected==="image"?"selected":""} onClick={()=>{setselected("image")}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill="#999999" fill-rule="evenodd" d="M1.532.004a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h3.93a2.16 2.16 0 0 1 .285-1.847H2.871a.296.296 0 0 1-.296-.296a2.956 2.956 0 0 1 5.577-1.37q.05-.117.08-.246l.022-.104c.306-1.397 1.694-1.901 2.778-1.507v-4.13a1.5 1.5 0 0 0-1.5-1.5zm4 5.019a1.774 1.774 0 1 0 0-3.548a1.774 1.774 0 0 0 0 3.548m3.943 2.385c.19-.868 1.427-.874 1.625-.007l.01.044l.02.086a2.69 2.69 0 0 0 2.16 2.037c.905.157.905 1.457 0 1.614a2.69 2.69 0 0 0-2.164 2.054l-.026.113c-.198.867-1.434.861-1.625-.007l-.02-.097a2.68 2.68 0 0 0-2.156-2.064c-.904-.158-.904-1.454 0-1.611a2.68 2.68 0 0 0 2.153-2.054l.016-.071z" clip-rule="evenodd"/></svg>
        </div>
        <div className={selected==="shape"?"selected":""} onClick={()=>{setselected("shape")}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#999999" d="M17.867 2.504c-.355-.624-1.381-.623-1.736 0l-3.999 7A1 1 0 0 0 13 11h8a1 1 0 0 0 .868-1.496zM3 22h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1m14.5-9c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5"/></svg>
        </div>
        <div className={selected==="text"?"selected":""} onClick={()=>{setselected("text")}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="#999999" d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 0v2h2V6zm1 3v2h2V9zm-1 3v2h2v-2zm3 0v2h10v-2zm11 0v2h2v-2zM6 9v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm3 0v2h2V9zM5 6v2h2V6zm3 0v2h2V6zm3 0v2h2V6zm3 0v2h4V6z"/></svg>
        </div>
    </div>
  )
}

export default LeftBody