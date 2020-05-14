const id = process.pid;
let arr = process.argv;

let r = 0;
for (i=2; i<arr.length; i++){
	r += Number(arr[i]);
}

process.emitWarning('Ho emesso un evento',{
	code: 'MY WORNING',
	detail: 'Il process in esecuzione è ' + id + '\n'
});

process.stdout.write("Il process con id " + id + " è in esecuzione\n");
console.log("La somma è " + r);

process.stdout.end("Fine del processo\n");