import SchoolOutline from "./schoolOutline"
import ModalButton from "./modalButton"
export default function GoodSchool(){

    return(
        <SchoolOutline schoolOverview={
            <div>
                <h2>Die gute Schule</h2>
                <p>Hier wird KI als Werkzeug genutzt</p>
                <p>Dadurch, dass die Schüler alle Informationen mit verlässlichen Quellen nachprüfen</p>
            </div>
        } mindmapItems={
            [
                <ModalButton title={"Hausaufgaben"} modalContent={<div>Hallo</div>}/>,
                <ModalButton title={"Klausuren"}  modalContent={<div>Hallo</div>}/>,
                <ModalButton title={"Lehrer"} modalContent={<div>Hallo</div>}/>,
            ]
        }/>
    )

}

