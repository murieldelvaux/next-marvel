"use client";

import { useHeroProfile } from "@/app/(features)/(hero)/[...heroId]/hooks/useHeroProfile";
import React from "react";
import styles from "@/app/(features)/(hero)/[...heroId]/components/Profile/profile.module.css";
import { ProfileHeader } from "@/app/(features)/(hero)/[...heroId]/components/ProfileHeader/ProfileHeader";
import { HeroDetail } from "@/app/(features)/(hero)/[...heroId]/components/HeroDetail/HeroDetail";
import { LatestComicReleases } from "@/app/(features)/(hero)/[...heroId]/components/LatestComicReleases/LatestComicReleases";

export const HeroProfile = () => {
  const { profile, comics, lastComicDate } = useHeroProfile();

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader />
      <HeroDetail
        profile={profile?.data.results[0]}
        lastComic={lastComicDate()}
      />

      <LatestComicReleases comics={comics?.data.results} />
    </div>
  );
};
