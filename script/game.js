class Game {
    constructor () {
        this.cells = [];
        this.gameField = null;
        this.currentUser = 0;
    }

    render () {
        const gameField = document.createElement('div');
        gameField.classList.add('game');

        for (let i = 0; i < 9; i++) {
            this.cells.push(
                new Cell()
            )
        };

        this.cells.forEach((cell, i) => {
            const cellHtml = cell.createCell();
            cellHtml.addEventListener(
                'click',
                () => {
                    this.clickHandler(cell, i)
                }
            )
            gameField.append(cellHtml);
        })

        this.gameField = gameField;
        document
            .getElementById('game-root')
            .append(gameField)
    }

    checkWin () {
        /*
            0 1 2
            3 4 5
            6 7 8
        */
        const c = this.cells;
        if (
            (
                (c[0].color !== null) &&
                (c[0].color === c[1].color) &&
                (c[1].color === c[2].color)
            ) || (
                (c[0].color !== null) &&
                (c[0].color === c[4].color) &&
                (c[4].color === c[8].color)
            )
        ) {
            alert(`пользователь ${this.currentUser} победил`)
        }

    }

    clickHandler (cell, i) {
        if (cell.color !== null) {
            return;
        }

        if (this.currentUser === 0) {
            cell.setBlue();
            this.checkWin();
            this.currentUser = 1;
        } else {
            cell.setRed();
            this.checkWin();
            this.currentUser = 0;
        }
    }
}

class Cell {
    constructor () {
        this.color = null;
        this.cell = null;
    }

    setBlue () {
        if (this.cell === null) {
            return;
        }
        this.cell.classList.remove('red');
        this.cell.classList.add('blue');
        this.color = 'blue';
    }

    setRed () {
        if (this.cell === null) {
            return;
        }
        this.cell.classList.remove('blue');
        this.cell.classList.add('red');
        this.color = 'red';
    }

    createCell () {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.cell = cell;
        return cell;
    }
}

const game = new Game();

game.render()