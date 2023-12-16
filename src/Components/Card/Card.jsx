export default function (props) {
    console.log(props.object.id);
  return (
    <div>
        <h2>{props.object.title}</h2>
        <p>{props.object.body}</p>
    </div>
  )
}
