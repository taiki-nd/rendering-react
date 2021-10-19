const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  console.log("ChildAreaが200回レンダリングされた");
  const { open } = props;
  const date = [...Array(200).keys()];
  date.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
