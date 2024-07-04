// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/typescript

// import { MORSE_CODE } from './preloaded';

const MORSE_CODE: { [key: string]: string } = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-.-.-': '.',
  '--..--': ',',
  '..--..': '?',
  '-.-.--': '!',
  '-....-': '-',
  '-..-.': '/',
  '.--.-.': '@',
  '-.-.-.': ';',
  '-.--.': '(',
  '-.--.-': ')',
  '...---...': 'SOS', // 특별 코드 추가
};

const WORD_SEPARATOR = '   ';
const LETTER_SEPARATOR = ' ';

function decodeWord(word: string): string {
  console.log(word.split(LETTER_SEPARATOR));
  return word
    .split(LETTER_SEPARATOR)
    .map((code) => MORSE_CODE[code])
    .join('');
}

export function decodeMorse(morseCode: string): string {
  const morseWords = morseCode.split(WORD_SEPARATOR);

  return morseWords.map(decodeWord).join(' ').trim();
}

decodeMorse('.... . -.--   .--- ..- -.. .');
