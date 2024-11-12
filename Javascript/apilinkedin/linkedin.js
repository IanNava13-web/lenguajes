
const url = 'https://linkedin-public-search.p.rapidapi.com/peoplesearch?keyword=bill&page=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cd280a8d72msh5673bb02b436082p1eac33jsn92bc224fb141',
		'x-rapidapi-host': 'linkedin-public-search.p.rapidapi.com'
	}
};

const apilinkedin = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}

}

apilinkedin()