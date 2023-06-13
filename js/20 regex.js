//pattern matching

// [] for matching values specified inside the sq bracket
// [abc] a,b or c
// [^abc] selects anything that doesnt have a, b, and c
// [a-z] selects small a to z range
// [A-z] selects caps A to z range
//[a-z][A-Z] selects both small and caps a to z
//[0-9] selects numbers

/*quantifiers

[] is followed by quantifiers
it tells about repetition

?  means repeat 0 or 1 time
+  minimum 1 or more
*  0 or more times
{n} occurs n times
{y,z} minimum y , maximum z times - range


//meta characters
\d means [0-9]
\D means [^0-9]
\w means word
\W means non word
\s means white space
\S means non whitespace


//grouping
use () to group
(t|T) means either t ot T


^ match the begining
^i match all i at the begining of paragraph
to match all i at the begining of each sentence add m to the identifier. 
$ match the end of the statement
*/

const emailPattern = /[\w\-\.]+[@][a-z]+[\.][a-z]{2,3}/gm;
console.log(emailPattern.test("mohdasif0612@gmail.com"));
