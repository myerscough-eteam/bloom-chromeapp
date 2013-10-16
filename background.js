chrome.omnibox.onInputEntered.addListener(function(text)
{
	chrome.tabs.update({url: 'http://bloom.myerscough.ac.uk/search/?q=' + encodeURIComponent(text)});
});