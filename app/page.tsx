
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type World = "acting" | "home" | "improv";

type Credit = {
  year: string;
  title: string;
  category: string;
  role?: string;
  director?: string;
};

type Photo = {
  file: string;
  alt: string;
};

const offsets: Record<World, string> = {
  acting: "0vw",
  home: "-100vw",
  improv: "-200vw",
};

const LINKS = {
  wizytowka: "https://youtu.be/iZn3et4MSko",
  showreel: "https://youtu.be/-v35sackaag",
  instagram: "https://www.instagram.com/syczalke/",
  email: "mailto:hubertsycz@gmail.com",
  agencja: "https://abewu.pl/aktor/hubert-sycz",
  filmmakers:
    "https://www.filmmakers.eu/pl/actors/hubert-sycz",
  filmpolski:
    "https://filmpolski.pl/fp/index.php?osoba=11134038",
  special:
    "https://www.youtube.com/watch
