import React from 'react';
import Stories from "./components/Stories"; 
import './App.css';

const data = {
  id: "3adb0aa2-4387-4fab-a8ed-4c38fc2334e4",
  campaign_type: "STR",
  details: [
    {
      id: "fe64197c-fa99-4f19-8132-0b61ee1956f5",
      name: "CheQ",
      thumbnail:
        "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Screenshot_2024-12-24_at_1.03.07PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1498e7b03aef67644e699b0e772a961f8c11684270a39b20893d4bf70f7a1751",
      ringColor: "#d7b404",
      nameColor: "#000000",
      order: 2,
      slides: [
        {
          id: "ff9d8e07-def5-4781-9944-6fe7d8dcec28",
          parent: "fe64197c-fa99-4f19-8132-0b61ee1956f5",
          image:
            "https://appstorysmediabucket.s3.amazonaws.com/story_slides/New_App_Android.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e2ab65c40c2c6dd7c17e46ed5ab876c59a6331851c26aac4224f98de30595203",
          video: null,
          link: "https://app20.in/4",
          button_text: "CheQ Offer",
          order: 1,
        },
      ],
    },
    {
      id: "38779bb3-52ac-440d-bdd3-80b6e18118a2",
      name: "Do's and Don't",
      thumbnail:
        "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Group_24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=394a359548fb85f7cda4e01a9a1f401c67a54ab1fcc8d2d2020c0fe299e44f10",
      ringColor: "#ffea00",
      nameColor: "#111111",
      order: 4,
      slides: [
        {
          id: "17859fbc-9457-40a6-8d83-0f8482694323",
          parent: "38779bb3-52ac-440d-bdd3-80b6e18118a2",
          image:
            "https://appstorysmediabucket.s3.amazonaws.com/story_slides/Frame_38.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=cb46a9f138b6d39f4e22d2ad629d465b5002724a9ff8bba01d7ef60f7f71b803",
          video: null,
          link: "",
          button_text: "",
          order: 2,
        },
      ],
    },
    {
      id: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
      name: "IOS",
      thumbnail:
        "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Frame_2_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c4d3997a62aa4842e73e87bfe49f7a01dc04aaebe845b7976b68051f1e068013",
      ringColor: "#ffd500",
      nameColor: "#111111",
      order: 5,
      slides: [
        {
          id: "7d945e48-3d3f-4a74-bd04-0b2296bbb9ea",
          parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
          image:
            "https://appstorysmediabucket.s3.amazonaws.com/story_slides/sportsbaazi.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b19e5e08afb4753f78eead1499262f4adb87b5be17fdcd8422576d85fdb30624",
          video: null,
          link: "https://app20.in/ios",
          button_text: "iOS Offer",
          order: 1,
        },
              {
                  id: "59feb0e4-68ce-4c6a-a2b6-c34eb82322b4",
                  parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.31_7eadf664.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=dccdf4ce1d64440ed0dc04a570a5ece530e48398c6fa28ef8ee878b63064baf2",
                  video: null,
                  link: "https://app20.in/ios/1",
                  button_text: "iOS Offer 1",
                  order: 2
              },
              {
                  id: "45f756ed-7eaf-45ca-b057-dcd784f8909f",
                  parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.32_290dca51.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=60bc4df2c0c4b873ddf007ffc8c650bed4c78a65e04f468f1f432f28f7c2aa36",
                  video: null,
                  link: "https://app20.in/ios/2",
                  button_text: "iOS Offer 2",
                  order: 3
              },
              {
                id: "d9825fb3-0fa3-4db9-9801-e044c7936172",
                  parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.32_a5975c0b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=92f3e4f26432077aa93f5995ac5f34c1ad6372ac612eaa5a043d4ee98711a4f3",
                  video: null,
                  link: "https://app20.in/ios/4",
                  button_text: "iOS Offer 4",
                order: 4
              },
              {
                  id: "5b8043ab-2297-459d-8648-85a06b18920b",
                  parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.32_a4080dd0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f62480069edc2c1e419af9e0b05111493520ff34d460788af6e7b4a86ecd9c25",
                  video: null,
                  link: "https://app20.in/ios/5",
                  button_text: "iOS Offer 5",
                  order: 5
              },
              {
                  id: "39a3fba9-7527-49f4-a8ab-bbc932a373df",
                  parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.32_e8af568d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e576ebea880eada650822b4d8a2681c63298b9d5a43a9e98bee0c0b100b8407e",
                  video: null,
                  link: "https://app20.in/ios/6",
                  button_text: "iOS Offer 6",
                  order: 6
              }
          ]
      },
      {
          id: "ba82ab84-86bb-4c67-97fd-620410523119",
          name: "Zupee",
          thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Group_22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=43fc5ede75491ffc9ebf1113996c4f1c2fdeb9772a921e3f6ba37c67dc5163e8",
          ringColor: "#ffd500",
          nameColor: "#111111",
          order: 8,
          slides: [
              {
                  id: "d9afb861-cda2-484e-a714-ccddcd79f134",
                  parent: "ba82ab84-86bb-4c67-97fd-620410523119",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/Frame_36.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=8cdb5700f551d4d307974904d15576276b1b767565f81c7a001da835accde13e",
                  video: null,
                  link: "https://app20.in/3",
                  button_text: "Start Offer",
                  order: 1
              }
          ]
      },
      {
          id: "128d0e25-cf02-4ce0-842f-fc36938701b6",
          name: "EloElo",
          thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/eleelo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e0f165f5b09d6f2493fa8196e7703c3fcea28bf4b425b2758d097fac808307a9",
          ringColor: "#fbff00",
          nameColor: "#000000",
          order: 9,
          slides: [
              {
                  id: "e19c3f6b-2108-474f-827c-beca7d3c1eb4",
                  parent: "128d0e25-cf02-4ce0-842f-fc36938701b6",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/App-min.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=84081dcc29021a0f91ee8de6b2b4c6a189b8fa021b1fd4e3afd6f23bcbd0e066",
                  video: null,
                  link: "https://app20.in/6",
                  button_text: "EloElo App Offer",
                  order: 1
              }
          ]
      },
      {
          "id": "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
          "name": "New Offers",
          "thumbnail": "https://appstorysmediabucket.s3.amazonaws.com/story_groups/new-offer.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=d86f11d9cb06b0b7f2c1816347426e79dace10d972b3a5d33c4294766745fe30",
          "ringColor": "#ffdd00",
          "nameColor": "#000000",
          "order": 10,
          "slides": [
              {
                  id: "f6209a23-7c11-418c-97d2-a4b69155f74f",
                  parent: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_12.31.32.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=25ef5781f46c6185398111e5668f649e53b4acce41b7750aabba43720e05259d",
                  video: null,
                  link: "https://app20.in/7",
                  button_text: "Ludo Supreme Offer",
                  order: 1
              },
              {
                  id: "7e6f8afc-b3ff-4ddc-b9b4-759f8decfc56",
                  parent: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
                  image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_12.32.26.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2UC3EJVDHJBIHV3T%2F20250118%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250118T061304Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=589260651a9b6607ab424ba8f606a86980e581e142a9399e76c0d672af948760",
                  video: null,
                  link: "https://app20.in/8",
                  button_text: "Pepperfry Offer",
                  order: 2
              }
          ]
      }
  ]


};

const App = () => {
  return (
    <div className="App">
      <h1>Stories</h1>
      <Stories data={data.details} />
    </div>
  );
};

export default App;
