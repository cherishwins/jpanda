import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Yev9cjVU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var house = "JPanda";
var system = "PLAIN SIGHT";
var tagline = "alea iacta est.";
var colors = [
	{
		name: "Ink",
		hex: "#0C0A09",
		token: "ink",
		use: "Field. Night. The ground everything stands on."
	},
	{
		name: "Paper",
		hex: "#F3EDE4",
		token: "paper",
		use: "Letters, decks, the quiet side of the house."
	},
	{
		name: "Rose",
		hex: "#8B1734",
		token: "rose",
		use: "The only loud color. Non-negotiable."
	},
	{
		name: "Gold",
		hex: "#C4A35A",
		token: "gold",
		use: "The Witness. Metal, not jewelry."
	},
	{
		name: "Moon",
		hex: "#8BA8B8",
		token: "moon",
		use: "Beam, steel, distance. Use like a rumor."
	}
];
var sites = [
	{
		name: "JPanda",
		href: "https://jpanda.org",
		role: "House"
	},
	{
		name: "Juche",
		href: "https://juche.org",
		role: "Doctrine"
	},
	{
		name: "Juchegang",
		href: "https://juchegang.ca",
		role: "Canada"
	},
	{
		name: "Kim.Juche",
		href: "https://kim.juche.org",
		role: "Line"
	},
	{
		name: "NPSI",
		href: "https://npsi.ca",
		role: "North Pacific"
	},
	{
		name: "1920.world",
		href: "https://1920.world",
		role: "Archive"
	},
	{
		name: "Ibrahim",
		href: "https://ibrahim.help",
		role: "Energy"
	}
];
var cipher = [
	{
		glyph: "习",
		reading: "xí",
		meaning: "Practice",
		place: "The closed bud. Discipline before display."
	},
	{
		glyph: "近",
		reading: "jìn",
		meaning: "Near",
		place: "The stems. The path that walks toward the heads."
	},
	{
		glyph: "平",
		reading: "píng",
		meaning: "Level",
		place: "Two blooms on one plane. Equal. Finished. Unbothered."
	}
];
var manifesto = [
	"I got tired of brands that announce themselves. The loud ones get eaten. The ones that last are the ones you walk past a hundred times before you notice the bones.",
	"This mark is two roses because two roses are level — equal, unhurried, done. The left bud is the practice. The stems are the approach. The heads sit on one plane because that is the whole point. If you have to be told what it is, it was never for you.",
	"The nickname is JPanda. The house sits on JPanda.org, and the rest of the lattice — Juche, NPSI, Ibrahim, the archive — is the same blood in different rooms. A new voice does not mean a new person. It means I stopped explaining.",
	"The rose is non-negotiable. Everything else can be quiet. The gold panda covers one eye because seeing is a choice, and so is not seeing. The moon is useful when it is; I will not force a beam into a room that does not want one.",
	"Alea iacta est. The die is cast. I am not workshopping this in committee. We move."
];
var voiceDo = [
	"Short sentences. Then a longer one that earns its keep.",
	"Name the thing. Do not decorate it.",
	"Write as if the reader is intelligent and slightly busy.",
	"Let the mark carry the secret. Copy stays clean.",
	"Contractions are fine. Slang is a spice, not a broth."
];
var voiceDont = [
	"Do not explain the cipher in public copy.",
	"Do not put a third rose in the lockup. That breaks the plane.",
	"Do not neon. Do not magenta. Do not assault-rifle mascots.",
	"Do not set the roses in a vase. They stand. They are not furniture.",
	"Do not write like a pitch deck that is afraid of silence."
];
var samples = [
	{
		label: "Close",
		text: "The die is already in the air. JPanda."
	},
	{
		label: "Letter",
		text: "Two heads. One plane. I will not be late to my own life. If the window is open, we walk through it. If it is not, we cut a door and call it weather."
	},
	{
		label: "Field note",
		text: "Proven ground. A man who has found oil eleven times does not need a TED Talk. He needs a clean title and a partner who can sit still. I have the minister. I have the terms. I am looking for the person who already knows why that matters."
	},
	{
		label: "About",
		text: "JPanda is the house. PLAIN SIGHT is the system. A lattice of doctrine, energy, and archive work that does not require a press release to exist. The mark is two roses. Look once. Then look again."
	}
];
var sections = [
	{
		id: "mark",
		label: "Mark"
	},
	{
		id: "cipher",
		label: "Look once"
	},
	{
		id: "color",
		label: "Color"
	},
	{
		id: "type",
		label: "Type"
	},
	{
		id: "voice",
		label: "Voice"
	},
	{
		id: "use",
		label: "Use"
	},
	{
		id: "house",
		label: "House"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var fills = {
	paper: "var(--color-paper)",
	rose: "var(--color-rose-hot)",
	gold: "var(--color-gold)",
	ink: "var(--color-ink)"
};
function RoseHead({ cx, cy, r, petals, open, fill }) {
	const rings = open ? 3 : 2;
	const nodes = [];
	for (let ring = 0; ring < rings; ring += 1) {
		const n = Math.max(5, petals - ring * 2);
		const rr = r * (1 - ring * .2) * (open ? 1 : .78);
		for (let i = 0; i < n; i += 1) {
			const a = i / n * Math.PI * 2 + ring * .4 + (open ? .15 : .55);
			const px = cx + Math.cos(a) * rr * (open ? .32 : .22);
			const py = cy + Math.sin(a) * rr * (open ? .26 : .2);
			nodes.push({
				key: `${ring}-${i}`,
				px,
				py,
				rx: rr * (open ? .4 : .3),
				ry: rr * (open ? .58 : .48),
				rot: a * 180 / Math.PI,
				opacity: .92 - ring * .14
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
		cx: n.px,
		cy: n.py,
		rx: n.rx,
		ry: n.ry,
		transform: `rotate(${n.rot} ${n.px} ${n.py})`,
		fill,
		opacity: n.opacity
	}, n.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx,
		cy,
		r: r * (open ? .1 : .08),
		fill: "var(--color-ink)",
		opacity: "0.4"
	})] });
}
function TwinRose({ className, variant = "paper", cipher = false, label = "Twin Rose mark" }) {
	const fill = fills[variant];
	const y = 108;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 300",
		className: cn("block h-auto w-full max-h-full", className),
		role: "img",
		"aria-label": label,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "40",
				y1: y,
				x2: "200",
				y2: y,
				stroke: cipher ? "var(--color-gold)" : fill,
				strokeOpacity: cipher ? .55 : .1,
				strokeWidth: cipher ? 1.15 : .5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M88 148 C84 188 78 228 74 268",
				fill: "none",
				stroke: fill,
				strokeWidth: "1.8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M158 148 C162 188 168 228 172 268",
				fill: "none",
				stroke: fill,
				strokeWidth: "1.8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 268 C108 280 140 280 172 268",
				fill: "none",
				stroke: fill,
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 250 C70 262 78 266 96 269",
				fill: "none",
				stroke: fill,
				strokeOpacity: cipher ? .95 : .38,
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 188 C64 182 52 204 60 218 C78 214 90 202 88 188Z",
				fill,
				opacity: "0.88"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M160 184 C184 176 196 200 186 216 C168 210 158 198 158 184Z",
				fill,
				opacity: "0.88"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseHead, {
				cx: 88,
				cy: y,
				r: 36,
				petals: 8,
				open: false,
				fill
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 122 C50 108 58 86 74 90",
				fill: "none",
				stroke: cipher ? "var(--color-gold)" : fill,
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoseHead, {
				cx: 158,
				cy: y,
				r: 46,
				petals: 10,
				open: true,
				fill
			}),
			cipher && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "var(--color-gold)",
				fontFamily: "var(--font-cipher)",
				fontSize: "20",
				textAnchor: "middle",
				opacity: "0.78",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "88",
						y: "68",
						children: "习"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "120",
						y: "44",
						children: "平"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "120",
						y: "292",
						children: "近"
					})
				]
			})
		]
	});
}
function WitnessMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/brand/panda-gold.jpg",
		alt: "The Witness — gold panda covering one eye",
		className: cn("h-auto w-full object-cover object-center", className)
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 overflow-hidden border-b border-paper/10 bg-ink/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block size-8 shrink-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwinRose, {
							variant: "rose",
							className: "h-8 w-8",
							label: "JPanda mark"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-[0.18em] uppercase",
						children: house
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${s.id}`,
						className: "text-xs tracking-[0.16em] text-muted uppercase hover:text-paper",
						children: s.label
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "relative size-11 md:hidden",
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-4 left-3 h-px w-5 bg-paper transition-transform duration-150", open && "translate-y-1.5 rotate-45") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-6 left-3 h-px w-5 bg-paper transition-transform duration-150", open && "-translate-y-1.5 -rotate-45") })]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-paper/10 px-5 py-4 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 font-display text-sm tracking-[0.2em] text-gold uppercase",
				children: "PLAIN SIGHT"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${s.id}`,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center text-sm tracking-[0.12em] text-paper/80 uppercase",
					children: s.label
				}, s.id))
			})]
		})]
	});
}
function Button({ className, tone = "ghost", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 px-4 text-sm tracking-wide transition-[opacity,transform,background-color,color] duration-150 ease-out active:not-disabled:scale-[0.96]", tone === "ghost" && "rounded-md text-paper/80 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_14%,transparent)] hover:text-paper", tone === "solid" && "rounded-md bg-paper text-ink hover:opacity-90", tone === "rose" && "rounded-md bg-rose text-paper hover:bg-rose-hot", className),
		...props
	});
}
function Hex({ hex }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "font-mono text-xs tracking-wider text-muted tabular-nums hover:text-paper",
		onClick: async () => {
			await navigator.clipboard.writeText(hex);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1200);
		},
		children: copied ? "Copied" : hex
	});
}
function Kit() {
	const [showCipher, setShowCipher] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[100svh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/roses-ink.jpg",
						alt: "Two red roses on black, heads on one plane",
						className: "absolute inset-0 h-full w-full object-cover object-[50%_18%]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 md:px-8 md:pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stagger-item font-display text-sm tracking-[0.42em] text-gold uppercase",
								children: house
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "stagger-item mt-3 font-display text-[14vw] leading-[0.85] font-medium tracking-[0.04em] text-paper md:text-8xl",
								children: system
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stagger-item mt-6 max-w-md font-display text-xl text-paper/80 italic md:text-2xl",
								children: tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "stagger-item mt-8 max-w-lg text-[1.05rem] leading-relaxed text-paper/70",
								children: "A house mark that does not introduce itself. Two roses. One plane. The rest is for people who look twice."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.32em] text-rose uppercase",
					children: "Manifesto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-8",
					children: manifesto.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[1.15rem] leading-[1.65] text-paper/88 md:text-[1.25rem]",
						children: p
					}, p.slice(0, 24)))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "mark",
				className: "border-t border-paper/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwinRose, {
							variant: "paper",
							cipher: showCipher,
							className: "max-h-[28rem]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
							children: "The mark"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl leading-tight md:text-5xl",
							children: "Twin Rose"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 leading-relaxed text-paper/75",
							children: "Primary lockup. Left bud closed. Right bloom open. Both heads registered to a single quiet horizon. Stems walk toward each other and do not apologize. Clear space is one bloom-width on every side. Never lock it to a rectangle that crops a head."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 leading-relaxed text-paper/75",
							children: [
								"Wordmark is ",
								house,
								" in display, tracked. System name ",
								system,
								" ",
								"sits underneath in small caps, or not at all. Most of the time, not at all."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: showCipher ? "rose" : "ghost",
								onClick: () => setShowCipher((v) => !v),
								children: showCipher ? "Hide construction" : "Look once"
							})
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-4 md:px-8",
					children: [
						["paper", "On ink"],
						["rose", "Rose"],
						["gold", "Gold"],
						["ink", "On paper"]
					].map(([v, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: cn("rounded-xl p-8", v === "ink" ? "bg-paper" : "bg-ink-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwinRose, {
							variant: v,
							label: `${label} lockup`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-4 text-center font-display text-sm tracking-[0.18em] text-muted uppercase",
							children: label
						})]
					}, v))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cipher",
				className: "border-t border-paper/10 bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
							children: "Construction"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl",
							children: "Hiding in plain sight is not a trick. It is manners."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl leading-relaxed text-paper/75",
							children: "Three meanings live in the geometry. They are not printed on the merch. They are not a password. They are the skeleton. Anyone can see two roses. The astute see why there are two, why one is closed, why the heads refuse to sit on different floors."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-6 md:grid-cols-3",
							children: cipher.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-ink p-6 pt-8 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_10%,transparent)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-cipher text-5xl text-rose",
										lang: "zh-Hans",
										children: c.glyph
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 font-display text-sm tracking-[0.2em] text-gold uppercase",
										children: [
											c.reading,
											" · ",
											c.meaning
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-relaxed text-paper/70",
										children: c.place
									})
								]
							}, c.glyph))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-2xl text-sm leading-relaxed text-muted",
							children: "Public rooms get the roses. Private rooms may show construction. If a stranger can read the skeleton without looking for it, the drawing got greedy. Pull it back."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "color",
				className: "border-t border-paper/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
							children: "Color"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Four rooms and a rumor."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-36", c.token === "ink" && "bg-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_12%,transparent)]", c.token === "paper" && "bg-paper", c.token === "rose" && "bg-rose", c.token === "gold" && "bg-gold", c.token === "moon" && "bg-moon"),
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-ink-2 px-4 py-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hex, { hex: c.hex }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted",
											children: c.use
										})
									]
								})]
							}, c.hex))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "type",
				className: "border-t border-paper/10 bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
						children: "Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-12 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.2em] text-muted uppercase",
							children: "Display · Cormorant Garamond"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-display text-6xl leading-[0.9]",
							children: [
								"Two heads.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"One plane."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-muted uppercase",
								children: "Body · Source Serif 4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg leading-relaxed text-paper/80",
								children: "Body copy is a serif because this house writes letters, not splash screens. Track the display. Do not track the body. Never set manifesto in all caps. Small caps are for the system name and for dates."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-cipher text-3xl text-rose",
								lang: "zh-Hans",
								children: "习 近 平"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Cipher · Noto Serif SC — construction only."
							})
						] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "voice",
				className: "border-t border-paper/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
							children: "Voice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl",
							children: "Direct. Finished. A little dangerous. Never cute."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-[0.18em] text-paper uppercase",
								children: "Do"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3 text-paper/75",
								children: voiceDo.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l border-rose pl-4",
									children: d
								}, d))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm tracking-[0.18em] text-paper uppercase",
								children: "Do not"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3 text-paper/75",
								children: voiceDont.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l border-paper/20 pl-4",
									children: d
								}, d))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-4 md:grid-cols-2",
							children: samples.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-xl bg-ink-2 p-6 md:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xs tracking-[0.22em] text-gold uppercase",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-[1.05rem] leading-relaxed text-paper/85",
									children: s.text
								})]
							}, s.label))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "use",
				className: "border-t border-paper/10 bg-ink-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
							children: "Use"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Photography, seal, witness."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "md:col-span-2 overflow-hidden rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/brand/roses-ink.jpg",
										alt: "Primary photography — twin roses on ink",
										className: "h-full max-h-[520px] w-full object-cover object-top"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "overflow-hidden rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/brand/seal-wax.jpg",
										alt: "Oxblood wax seal of two roses",
										className: "h-full max-h-[520px] w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "overflow-hidden rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WitnessMark, { className: "max-h-[420px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "md:col-span-2 overflow-hidden rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/brand/still-beam.jpg",
										alt: "Roses, gold witness, moonbeam",
										className: "max-h-[420px] w-full object-cover"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-6 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: "Photography is always two roses, never a bouquet. One may be a bud. Both heads level. Black field preferred."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: "The wax seal is the stamp, the coin, the closing mark on a letter. No lettering inside the wax."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: "The Witness is gold, geometric, one eye covered. Secondary only. It does not replace the roses."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 overflow-hidden rounded-xl bg-paper p-8 text-ink md:p-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwinRose, {
											variant: "ink",
											className: "h-20 w-16"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xs tracking-[0.28em] uppercase",
										children: house
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-16 font-display text-3xl leading-tight md:text-4xl",
									children: tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-md text-sm leading-relaxed text-ink/70",
									children: "Letterhead. Paper field, ink mark, rose used once in the rule beneath the close. Date in small caps."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-12 h-px bg-rose" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-sm tracking-[0.2em] uppercase",
									children: system
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "house",
				className: "border-t border-paper/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.32em] text-gold uppercase",
							children: "House"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Same blood. Different rooms."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 divide-y divide-paper/10 border-y border-paper/10",
							children: sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.href,
								className: "flex min-h-16 items-center justify-between gap-4 py-4 hover:text-gold",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-[0.18em] text-muted uppercase",
									children: s.role
								})]
							}) }, s.href))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-paper/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-14 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwinRose, {
							variant: "rose",
							className: "h-16 w-14"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm tracking-[0.18em] text-muted uppercase",
						children: [
							house,
							" · ",
							system,
							" · ",
							tagline
						]
					})]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kit, {})] });
}
//#endregion
export { Home as component };
