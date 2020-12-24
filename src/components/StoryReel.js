import React, { useEffect, useState } from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    } , [])

    return (
        <div className="storyReel">
            <Story image="http://wpkixx.com/html/pitnik-dark/images/resources/story-1.jpg" profileSrc={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} title="Syed Khizer"
            />
            <Story image="https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg" profileSrc={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} title="Goon Deve3"
            />
            <Story image="http://wpkixx.com/html/pitnik-dark/images/resources/story-2.jpg" profileSrc={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} title="Jack Carter"
            />
            <Story image="https://d25tp5yt5ghnv4.cloudfront.net/image/desk_pdp_zoom/514966" profileSrc={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} title="Heriz"
            />
        </div>
    )
}

export default StoryReel
