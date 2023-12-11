import React, { useContext, useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Logout = () => {
    const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };


//   use context 
const {logOut} = useContext(AuthContext);

  const hangleSignOut = () => {
    // console.log("sign out");
    logOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
  }
  return (
    <div className='h-screen flex items-center justify-center'>
        <Button onClick={() => props.setOpenModal('default')}>Click aqui para salir</Button>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Terminos y condiciones</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            A menos de un mes de que la Unión Europea promulgue nuevas leyes de privacidad del consumidor para sus ciudadanos,
              empresas de todo el mundo están actualizando sus acuerdos de términos de servicio para cumplirlos.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            El Reglamento General de Protección de Datos de la Unión Europea (G.D.P.R.) entra en vigor el 25 de mayo y está destinado a
              garantizar un conjunto común de derechos sobre datos en la Unión Europea. Requiere que las organizaciones notifiquen a los usuarios tan pronto como
              posible de violaciones de datos de alto riesgo que podrían afectarlos personalmente.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" onClick={hangleSignOut}><Button onClick={() => props.setOpenModal(undefined)}>¡Sí, quiero cerrar sesión!</Button></Link>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Rechazar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Logout