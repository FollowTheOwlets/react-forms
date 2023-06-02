import React, { ChangeEvent, MutableRefObject, useRef } from 'react'

export const Form = () => {
    const back = useRef<HTMLDivElement | null>(null);
    const rgb = useRef<HTMLDivElement | null>(null);


    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const val = evt.target.value;
        const clr = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);

        if (clr) {
            const color = [parseInt(clr[1], 16), parseInt(clr[2], 16), parseInt(clr[3], 16)]
            rgb.current!.textContent = `rgb(${color.join(", ")})`;
            back.current!.setAttribute("style", `background-color: rgb(${color.join(", ")})`);

        } else if (val[0] !== "#" || val.length === "#000000".length) {
            rgb.current!.textContent = `Error!`;
        }
    }

    return (
        <div className="background" ref={back}>
            <input type="text" id='hex' onChange={handleChange} />
            <div className="rgb" ref={rgb}></div>
        </div>
    )
}
