import { useState } from "react";

export default function CharacterGame() {
    const name = '';
    const [character, setCharacter] = useState({
        name: "Hero",
        level: 1,
        experience: 0,
        health: 100,
        inventory: []
    })

    function randomExperiencePoints() {
        let newCharacter = {...character}
        let newExperience = (Math.floor(Math.random () * (50 - 10 + 1)) + 10)
        console.log(newExperience)
        newCharacter.experience += newExperience
        setCharacter(newCharacter)
            //newCharacter.experience
          // setCharacter(Math.floor(Math.random () * (50 - 10 + 1)) + min)
    }

    return (
        <div>
        <div>
        <h2>Character Stats</h2>
        <p><b>Name:</b> {character.name}</p>
        <p><b>Level:</b> {character.level}</p>
        <p><b>Experience:</b> {character.experience}</p>
        <p><b>Health:</b> {character.health}</p>
        <p><b>Inventory:</b> {character.inventory.length > 0 ? character.inventory.join(", ") : "Empty"}</p>
    </div>
        <button onClick = {() => randomExperiencePoints()}>rando-exp</button>
        </div>
    )
}