"use client";

import React from "react";
import Section from "../Section";
import styles from "./index.module.css";



import GalleryInfo from "../../_data/info-gallery";


import dynamic from "next/dynamic";

const ModalImage = dynamic(() => import("react-modal-image"), { ssr: false });


export default function Gallery() {

    return (
        
            <Section id="jump03" eng="Gallery" jpn="ギャラリー" wrap={true}>
                <ul className={styles.gallery_list}>
                    
                {GalleryInfo.map((photo, index) => (

                      <li key={index}>
                        <ModalImage
                              small={photo}
                              large={photo}
                              alt=""
                            />

                            </li>
                    ))};
                </ul>
            </Section>

    );
}