function getLastEl(input: number): number;
function getLastEl(input: string): string;
function getLastEl(input: number | string): number | string {
   const str = input.toString().trim();

  if (str.length === 0) {
    throw new Error("No input");
  }

  const lastCharacter: string = str.charAt(str.length-1);

  if (typeof input === "number"){
    const digit = parseInt(lastCharacter, 10);
    if (isNaN(digit)){
        throw new Error("Unable to get last digit");
    }
    return digit;
  }
  return lastCharacter;
}

let a: any = prompt("Enter number or string");

if (a === null || a.trim() === "") {
  alert("Input was canceled or empty");
} 
else {
  const parsed: number = Number(a.trim());

try {
    alert(getLastEl(a));
} 
catch (error) {
    if (error instanceof Error) {
      alert(`Error: ${error.message}`);
    }
}
}