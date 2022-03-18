function Footer(props){
  const { className, length, answered } = props;
  return(
    <footer className={className}>
      {answered}/{length} CONCLUÍDOS
    </footer>
  );
}

export default Footer;