export const colors = [
    {
        "brickColor": "blue"
    },
    {
        "brickColor": "green"
    },
    {
        "brickColor": "red"
    },
    {
        "brickColor": "yellow"
    },
    {
        "brickColor": "orange"
    },
];

export const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}