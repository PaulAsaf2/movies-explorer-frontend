import { React, useState } from "react";

export default function MenuButton(
  // { open, onClick }
) {

  const [open, setOpen] = useState(false)

  const styles = {
    line: {
      height: '3px',
      width: '28px',
      background: 'black',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: open ? 'translateX(5px) rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '7px',
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
    },
    lineBottom: {
      marginTop: '7px',
    },
  }

  return (
    <div
      className="menu__button"
      onClick={() => setOpen(!open)}
    >
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  )
}