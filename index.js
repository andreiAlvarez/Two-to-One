// Solution 1

function longest(s1, s2) { 
return Array.from(new Set(s1 + s2)).sort().join('');
}

// Solution 2

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

