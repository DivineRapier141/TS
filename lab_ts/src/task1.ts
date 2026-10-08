function raiseError(message: string): never{
    throw new Error(message);
}

function getSeason(month: number): string{
    if (month < 1 || month > 12 || !Number.isInteger(month)) {
        raiseError('Invalid month number');
    }

    switch (month){
        case 3:
            return "Spring";
        case 6:
            return "Summer";
        case 9:
            return "Fall";
        case 12:
            return "Winter";
        default:
            raiseError(`Month ${month} is not first in its season`);
    }
}

let a: number =Number((prompt('Enter number of first month of any season')));

try {
    alert(getSeason(a));
} 
catch (error) {
    if (error instanceof Error) {
      alert(`Error: ${error.message}`);
    }
}