
document.addEventListener('DOMContentLoaded', function () {
    createGameForm();
    createCharacterForm();
    createNPCForm();
});

function createGameForm() {
    const form = document.getElementById('game-form');
    form.innerHTML = `
        <input type="text" name="gameName" placeholder="Game Name" required />
        <input type="text" name="voiceId" placeholder="Voice ID" required />
        <textarea name="setting" placeholder="Setting" required></textarea>
        <textarea name="goal" placeholder="Goal" required></textarea>
        <textarea name="intro" placeholder="Intro" required></textarea>
        <textarea name="win" placeholder="Win" required></textarea>
        <textarea name="fail" placeholder="Fail" required></textarea>
        <textarea name="summary" placeholder="Summary" required></textarea>
        <textarea name="current" placeholder="Current" required></textarea>
        <button type="submit">Generate Game JSON</button>
    `;
    form.addEventListener('submit', (event) => onFormSubmit(event, 'game'));
}

function createCharacterForm() {
    const form = document.getElementById('character-form');
    form.innerHTML = `
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="voiceId" placeholder="Voice ID" required />
        <textarea name="backstory" placeholder="Backstory" required></textarea>
        <textarea name="appearance" placeholder="Appearance" required></textarea>
        <textarea name="skills" placeholder="Skills" required></textarea>
        <textarea name="items" placeholder="Items" required></textarea>
        <textarea name="current" placeholder="Current" required></textarea>
        <button type="submit">Generate Character JSON</button>
    `;
    form.addEventListener('submit', (event) => onFormSubmit(event, 'character'));
}

function createNPCForm() {
    const form = document.getElementById('npc-form');
    form.innerHTML = `
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="voiceId" placeholder="Voice ID" required />
        <textarea name="backstory" placeholder="Backstory" required></textarea>
        <textarea name="appearance" placeholder="Appearance" required></textarea>
        <textarea name="personality" placeholder="Personality" required></textarea>
        <textarea name="skills" placeholder="Skills" required></textarea>
        <textarea name="location" placeholder="Location" required></textarea>
        <textarea name="items" placeholder="Items" required></textarea>
        <textarea name="current" placeholder="Current" required></textarea>
        <button type="submit">Generate NPC JSON</button>
    `;
    form.addEventListener('submit', (event) => onFormSubmit(event, 'npc'));
}

function onFormSubmit(event, category) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    const blob = new Blob([JSON.stringify(data, null, 2)], {type : 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = category + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
