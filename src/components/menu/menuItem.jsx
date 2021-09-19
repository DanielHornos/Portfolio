export default function MenuItem({ setMenuOpen, idReference, text }) {
  return (
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href={idReference}>{text}</a>
        </li>
      </ul>
  );
}