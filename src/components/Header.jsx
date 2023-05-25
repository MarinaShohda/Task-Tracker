import Button from "./Button"

const Header = ({onAdd, showForm}) => {
  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button text={showForm ? 'Close' : 'Add'}  color={showForm ? 'red' : 'green'} onAdd={onAdd}/>
    </header>
  )
}

export default Header