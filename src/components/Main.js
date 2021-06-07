import dayjs from "dayjs";
import { useState, useEffect } from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import { getNewId } from "../services/idService";
import Timer from "./Timer";
import CheckboxInput from "./CheckboxInput";
import OnlineOffline from "./OnlineOffline";

export default function Main() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [online, setOnline] = useState(true);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleDateChange(newDate) {
    if (!newDate) {
      return;
    }
    setBirthDate(newDate);
    const today = dayjs(new Date());
    const dateDifference = today.diff(dayjs(birthDate), "years");
    if (isNaN(dateDifference)) {
      return;
    }
    setAge(dateDifference);
  }

  function handleToggleTimer() {
    setToggleTimer((currentToggle) => !currentToggle);
  }

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setOnline(true);
    }

    function toggleOffline() {
      setOnline(false);
    }

    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOffline);

    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOffline);
    };
  });

  return (
    <div>
      <main className="container mx-auto p-4">
        <OnlineOffline online={online} />

        {toggleTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}

        <CheckboxInput
          id={getNewId()}
          labelDescription={
            toggleTimer ? "Desativar cronômetro" : "Ativar cronômetro"
          }
          checked={toggleTimer}
          onInputChange={handleToggleTimer}
        />

        <TextInput
          id={getNewId()}
          labelDescription="Digite seu nome"
          inputDefaultValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />

        <DateInput
          id={getNewId()}
          labelDescription="Data de nascimento"
          inputDefaultValue={birthDate}
          onInputChange={handleDateChange}
        />
        <p>Nome: [{name}]</p>
        <p>Caracteres: [{name.length}]</p>
        <p>Idade: [{age}]</p>
      </main>
    </div>
  );
}
