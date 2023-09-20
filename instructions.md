# A1: Hello Web!

**Speedrun:**

* Join a squad
* Make a Glitch account (or learn Github hosting)
* Learn enough JS/HTML/CSS to make a basic page
	* or if experienced, learn something new and teach your squad 
* Make your own site
	* download the tgz (a zipped file) file from Glitch 
	* (bottom row -> Tools -> Import/Export -> download)
	* Your site must have (but will probably have more):
		* at least one asset used
		* at least 5 HTML elements
		* at least 5 CSS selectors used (ie, 5 blocks in the CSS file)
		* at least one button that does something with JS 
* Organize with the squad to make a squad page
	* Have all the squad's glitch handles and any links
* Submit it on Canvas	
	* Glitch .tgz
	* readme.md
	* screenshot(s) of your page, showing the grader how it looks so they can grade it even if there's a Glitch problem or it breaks later

**All help from the internet, GPT, classmates, etc must be in your readme.**

**Do not add images or resources you do not have a license to use**

**Keep your total assets to less than 5Mb**

# Your page

Consider how you want your page to present yourself.  Are you playful? Serious? Futuristic? Stylish?  Conisder
[list of aesthetics](https://cari.institute/aesthetics/)


Join a squad. The first Friday, your job is to self-organize into about 15 groups. Squad work is a low-risk way to get more points while practicing a *small* amount of group collaboration and having a group to help with tutorials and debugging.  

Squads that do great work together can gain a bit of extra credit at the Squad Showcase on the last day.  Squads that help each other out with best-of guides, tutorials, and debugging will learn faster and more skills than working alone! 

**If you don't want to pursue any of the group points, join Solo squad.** You can easily get a B+ without it, but you'll waste the rarest and most expensive part of an NU education, which is making connections with future collaborators. In 2-5 years, most of your job opportunities will *come from other Northwesterners who remember you*.



# Squad page
**Requirements:**

* Have the squad name and all glitch handles
* Have a notice clearly visible on this squad page with whether or not it can be shared outside class.  
	* be cool, don't broadcast work that doesn't want to be broadcast.
* Have links to all 


**Other nice features:**

* get thumbnails of each work, or write promo copy
* highlight the squad's favorite 3 
* make a place for tutorials or Best-of guides 
* automatically make links for each project instead of laying them out by hand
	* get the Glitch handle of every squad member
	* name your projects myHandle_a1, my_handle_a2...etc
	* use Vue to make a section for each new assignment with the links computed automatically with a "v-for" directive, e.g.:

```
<div class="assignment_group" v-for="a_id in assignments">
	<div class="assignment-link" v-for="handle in squadHandles">
		<img>
		<a :href="glitch.com/' + handle + '_' + a_id">{{handle}}'s {{a_id}}
	</div>
</div>
```

