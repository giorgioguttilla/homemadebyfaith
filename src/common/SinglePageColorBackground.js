const SinglePageColorBackground = ({colorLeft, colorRight}) => {
    return <div className="d-flex" style={{ position: "absolute", width: "100%", height: "100%" }}>
        <div style={{ backgroundColor: colorLeft, width: "20%" }} />
        <div style={{ backgroundColor: colorRight, width: "80%" }} />
    </div>
}



export default SinglePageColorBackground