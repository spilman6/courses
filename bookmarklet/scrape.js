javascript: (async () => {
	const i = document.querySelector('[id^=ptModFrame]');
	const d = i.contentDocument || iframe.contentWindow.document;
	const section = d.querySelector('#SSR_CLS_DTL_WRK_CLASS_NBR').textContent;
	const parts = d.querySelector('[id^=MTG_SCHED]').textContent.split(' ');
	const days = parts[0];
	const times = parts.slice(1).join(' ') || 'Flexible';
	const location = d.querySelector('[id^=MTG_LOC]').textContent.replace(' INTERNET', '');
	const dates = d.querySelector('[id^=MTG_DATE]').textContent;
	await navigator.clipboard.writeText(`section: ${section}\ndays: ${days}\ntimes: ${times}\nlocation: ${location}\ndates: ${dates}`);
	alert('Data copied to clipboard!');
})();

