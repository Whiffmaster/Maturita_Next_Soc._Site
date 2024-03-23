import {ImUserPlus} from "react-icons/im";
import {useState} from "react";


/*
const AddButton = ({targetID}: { targetID: string }) => {
  const {showError, showSuccess} = usePopup()
  const {data} = useUserContext()
  const [invited, setInvited] = useState<boolean>(data.invitesSent.includes(targetID))


  const addFriend = () => {
    console.log(data.invitesSent)
    if (!targetID || targetID == "") return showError("No target ID")
    if (data.invitesSent.includes(targetID) || invited) return showError("Invite already sent")
    data.invitesSent.push(targetID)
    setInvited(true)
    axios.post("http://localhost:5000/user/addFriend", {
      targetID: targetID,
      inviter: {username: data.username, _id: data._id}
    }, {
      headers: {
        "authorization": Cookies.get("token")
      }
    }).then((res) => {
      showSuccess("Friend request send")
      console.log(res)
    }).catch((e) => {
      showError("jajks error" + e.code)
      console.log(e)
    })
  }

  return (
    <button
      className="w-[8vw] flex flex-row h-[4vh] disabled:bg-red-600 disabled:opacity-40 px-1 rounded-lg ml-1 mr-2 my-1 bg-gray-800 items-center justify-between justify-items-center self-center"
      onClick={addFriend} disabled={invited}>
      <h3 className={"text-sm justify-self-start"}>Add</h3>
      <ImUserPlus className={"justify-self-end"} width={40} height={40}/>
    </button>
  )
}

export default AddButton
*/