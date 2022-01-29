export const template = `ul.profile-links
        if(labelLinkChangeProfile && linkChangeProfile)
          li
            a(href=linkChangeProfile, class="profile-link") #{labelLinkChangeProfile}
        if(labelLinkChangePassword && linkChangePassword)
          li
            a(href=linkChangePassword, class="profile-link") #{labelLinkChangePassword}
        if(labelLinkExit && linkExit)
          li
            a(href=linkExit, class="profile-link profile-link-exit") #{labelLinkExit}`;
