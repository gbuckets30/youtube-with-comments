# Youtube With Comments

If you are one of those people who like to scroll through comments while watching a video, you know how irritating it is to use YouTube on a pc.
When we scroll down to the comments, the video gets hidden. This is a very unpleasant experience as compared to the mobile app. 

**YouTube With Comments allows you to continue using the web app, while also providing the benefits of the mobile app, by just entering the video ID in the search bar.**

![Screen Grab of the Web app](https://i.imgur.com/A2yjqIZ.png)

Here is what the UI looks like. I tried to make it resemble the YouTube web app as much as I could, but since data was not publicly available about the styles they used, all I could do is make educated guesses. If you have any info on the fonts/line spacing/anything else, **please reach out to me through my e-mail.**

Also, the server code contains routes and methods to access the reply data for comments, but I have not included it in the client code because the quota provided by Google for daily requests is too small and it will lead to an error saying _you have exceeded your daily quota limit_. Since I'm broke, I'll not be buying any plans ;_;

Next steps are to format the client code to separate out smaller components and possibly tweak the UI a little bit to make it resemble the YouTube web app more closely.

_I will update this space with further details as the project moves forward_
