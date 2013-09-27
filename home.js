if (history.state)
{
	history.back();
}
else
{
	history.replaceState({page: 'Bloom'}, "Bloom", "");
	chrome.tabs.update({url: 'http://bloom.myerscough.ac.uk'});
}