import { Day } from "../day";

class Day7 extends Day {

    constructor(){
        super(7);
    }

    camelSort(a: Hand, b: Hand): number {
        if (a.typeStr !== b.typeStr) {
            return a.typeStr - b.typeStr
        }

        for (let i = 0; i < 5; i++) {
            if (a.cardsStr[i] !== b.cardsStr[i]) {
                return a.cardsStr[i] - b.cardsStr[i]
            }
        }

        return 0
    }

    solveForPartOne(input: string): string {
        const lines = input.split('\n')

        const CardStr: Record<CardType, number> = {
            A: 14,
            K: 13,
            Q: 12,
            J: 11,
            T: 10,
            9: 9,
            8: 8,
            7: 7,
            6: 6,
            5: 5,
            4: 4,
            3: 3,
            2: 2
        }

        const hands: Hand[] = lines.filter((line) => line).map((line) => {
            const [hand, bid] = line.split(/[ ]+/)

            const cards = hand.split('') as CardType[]
            const cardsStr = cards.map((c: CardType) => CardStr[c])

            const cardCount: Partial<Record<CardType, number>> = {}
            for (const card of cards) {
                const count = cardCount[card] ?? 0
                cardCount[card] = count + 1
            }

            const [a, b] = Object.values(cardCount).sort().reverse()
            let type: HandType
            if (a === 5) {
                type = '5k'
            } else if (a === 4) {
                type = '4k'
            } else if (a === 3 && b == 2) {
                type = 'fh'
            } else if (a === 3 && b == 1) {
                type = '3k'
            } else if (a === 2 && b == 2) {
                type = '2p'
            } else if (a === 2 && b == 1) {
                type = '1p'
            } else {
                type = 'h'
            }

            const typeStr = HandStr[type]

            return { hand, bid: parseInt(bid), cards, cardsStr, type, typeStr }
        })

        hands.sort(this.camelSort)

        let total = 0
        for (const [rank, hand] of hands.entries()) {
            total += hand.bid * (rank + 1)
        }

        return String(total)
    }

    solveForPartTwo(input: string): string {
        const lines = input.split('\n')

        const CardStr: Record<CardType, number> = {
            A: 14,
            K: 13,
            Q: 12,
            T: 10,
            9: 9,
            8: 8,
            7: 7,
            6: 6,
            5: 5,
            4: 4,
            3: 3,
            2: 2,
            J: 1,
        }

        const hands: Hand[] = lines.filter((line) => line).map((line) => {
            const [hand, bid] = line.split(/[ ]+/)

            const cards = hand.split('') as CardType[]
            const cardsStr = cards.map((c: CardType) => CardStr[c])

            const cardCount: Partial<Record<CardType, number>> = {}
            const noJCards = cards.filter((c) => c !== 'J')
            const jCount = cards.length - noJCards.length

            for (const card of noJCards) {
                const count = cardCount[card] ?? 0
                cardCount[card] = count + 1
            }

            let [a, b] = Object.values(cardCount).sort().reverse()
            a ??= 0
            a += jCount

            let type: HandType
            if (a === 5) {
                type = '5k'
            } else if (a === 4) {
                type = '4k'
            } else if (a === 3 && b == 2) {
                type = 'fh'
            } else if (a === 3 && b == 1) {
                type = '3k'
            } else if (a === 2 && b == 2) {
                type = '2p'
            } else if (a === 2 && b == 1) {
                type = '1p'
            } else {
                type = 'h'
            }

            const typeStr = HandStr[type]

            return { hand, bid: parseInt(bid), cards, cardsStr, type, typeStr }
        })

        hands.sort(this.camelSort)

        let total = 0
        for (const [rank, hand] of hands.entries()) {
            total += hand.bid * (rank + 1)
        }

        return String(total)
    }
}

export default new Day7;


type CardType = 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2'
type HandType = '5k' | '4k' | 'fh' | '3k' | '2p' | '1p' | 'h'

const HandStr: Record<HandType, number> = {
    '5k': 6,
    '4k': 5,
    'fh': 4,
    '3k': 3,
    '2p': 2,
    '1p': 1,
    'h': 0
}

interface Hand {
    hand: string
    bid: number
    cards: CardType[]
    cardsStr: number[]
    type: HandType
    typeStr: number
}
