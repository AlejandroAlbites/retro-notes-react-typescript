import { useContext, useEffect } from "react";
import { NoteContext } from "../../context/NoteContext";
import "./successNotification.scss";

interface Props {
  text: string;
}
export const SuccessNotification = ({ text }: Props) => {
  const { notification } = useContext(NoteContext);

  useEffect(() => {
    setTimeout(() => {
      notification(false, "");
    }, 3000);
  }, []);
  return (
    <section className="message-list notification-container">
      <i className="nes-octocat animate"></i>
      <div className="nes-balloon from-left">
        <p className="text-notification">
          Muy bien,
          {(text === "note created" && <span>Nota creada!</span>) ||
            (text === "note updated" && <span>Nota Actualizada!</span>) ||
            (text === "note deleted" && <span>Nota Eliminada!</span>)}
        </p>
      </div>
    </section>
  );
};
