import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Css from "./admin.module.css";
import { Button, Modal } from "react-bootstrap";
import { TiUserOutline } from "react-icons/ti";
import { AiOutlineBorderOuter } from "react-icons/ai";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await getDocs(collection(db, "users"));
      setUsers(
        usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers(users.filter((user) => user.id !== userId));
      console.log("User successfully deleted");
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <div className={Css.container}>
      <div className={Css.block1}>
        <button variant="primary" onClick={handleShow} className={Css.Btn}>
          View all users <TiUserOutline/>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>All users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
              {users.map((user) => (
                <div key={user.id} className={Css.user}>
                 email: {user.email}
                  <button onClick={() => deleteUser(user.id)} className={Css.DelBtn}>Delete</button>
                </div>
              ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className={Css.block2}>
      <button variant="primary" onClick={handleShow1} className={Css.Btn}>
      <AiOutlineBorderOuter/>
        </button>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>All users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
              
                <div  className={Css.user}>
                  2500$
                </div>
                <div  className={Css.user}>
                  1200$
                </div>
                <div  className={Css.user}>
                  341$
                </div>
                <div  className={Css.user}>
                  21$
                </div>
                <div  className={Css.user}>
                  25$
                </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminPanel;
