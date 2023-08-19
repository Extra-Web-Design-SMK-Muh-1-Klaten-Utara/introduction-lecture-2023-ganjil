<script lang="ts">
	import {
		Presentation,
		Slide,
		Layout,
		Vertical,
		Step,
		Stretch,
	} from '@components'

	import Me from './assets/images/me.jpg'

	import Stackoverflow from './assets/images/stackoverflow.webp'
	import Github from './assets/images/github.webp'
	import Linkedin from './assets/images/linkedin.webp'
	import Twitter from './assets/images/twitter.jpeg'

	import Hasil1 from './assets/images/extra-1.png'
	import Hasil2 from './assets/images/extra-2.png'
	import Hasil3 from './assets/images/extra-3.png'
	import Hasil4 from './assets/images/extra-4.png'

	import html from './assets/images/icons8-html-96.png'
	import css from './assets/images/icons8-css-96.png'
	import js from './assets/images/icons8-javascript-96.png'
	import figma from './assets/images/icons8-figma-96.png'
	import vscode from './assets/images/icons8-visual-studio-code-96.png'

	import Whatsapp from './assets/images/icons8-whatsapp-48.png'
	import Discord from './assets/images/icons8-discord-96.png'
</script>

<Presentation>
	<Slide>
		<Layout>
			<h1 class="font-mono font-bold text-6xl tracking-widest">
				Introduction
			</h1>
			<h2>Extra Web Design</h2>
		</Layout>
	</Slide>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="siapa-aku">
					Siapa aku?
				</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="siapa-aku">
					Siapa aku?
				</h1>
				<div
					class="flex flex-col gap-4 justify-center items-center"
					data-id="aku-layout"
				>
					<img
						src={Me}
						alt="Me"
						class="w-40 h-40 rounded-full object-cover"
					/>
					<h2>Akbar Hendra Jaya</h2>
				</div>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="siapa-aku">
					Siapa aku?
				</h1>
				<div
					class="flex flex-col gap-4 justify-center items-center"
					data-id="aku-layout"
				>
					<img
						src={Me}
						alt="Me"
						class="w-40 h-40 rounded-full object-cover"
					/>
					<h2>Akbar Hendra Jaya</h2>
				</div>
				<h6 class="text-lg">UnknownRori</h6>
			</Layout>
		</Slide>
		<Slide>
			<Layout>
				<h1 class="text-6xl font-bold">Riwayat Studi</h1>
				<ul class="list-disc text-left flex flex-col gap-4">
					<Step>
						<li>
							<h2>STIMIK Amikom Surakarta (2022 - Sekarang)</h2>
							<p class="text-2lg">D3 Manajemen Informatika</p>
						</li>
					</Step>
					<Step>
						<li>
							<h2>
								SMK Muhammadiyah 1 Klaten Utara (2019 - 2022)
							</h2>
							<p class="text-2lg">RPL</p>
						</li>
					</Step>
				</ul>
			</Layout>
		</Slide>
		<Slide>
			<Layout>
				<h1 class="text-6xl font-bold">Prestasi</h1>
				<ul class="list-disc text-left flex flex-col gap-4">
					<Step>
						<li>
							<h2>Lomba Web Kabupaten Klaten - 2021</h2>
							<Step>
								<p class="text-4xl">Juara 1</p>
							</Step>
						</li>
					</Step>
					<Step>
						<li>
							<h2>Lomba Web Provinsi Jawa Tengah - 2022</h2>
							<div class="flex m-auto gap-4">
								<Step>
									<p class="text-4xl">Juara 2</p>
								</Step>
								<Step>
									<p class="text-2xl">Dari belakang</p>
								</Step>
							</div>
						</li>
					</Step>
				</ul>
			</Layout>
		</Slide>

		<Slide>
			<Layout>
				<h1 class="text-6xl font-bold">Sosial Media</h1>
				<ul class="flex flex-col gap-4 text-left self-start">
					<li>
						<a
							href="https://github.com/UnknownRori"
							class="flex gap-2 items-center"
						>
							<img
								src={Github}
								alt="Github"
								class="w-20 h-20 object-cover rounded-3xl"
							/>
							<p class="w-fit">@UnknownRori</p>
						</a>
					</li>

					<li>
						<a
							href="https://stackoverflow.com/users/13991588/unknownrori"
							class="flex gap-2 items-center"
						>
							<img
								src={Stackoverflow}
								alt="Stackoverflow"
								class="w-20 h-20 object-cover rounded-3xl"
							/>
							<p class="w-fit">@UnknownRori</p>
						</a>
					</li>

					<li>
						<a
							href="https://www.linkedin.com/in/unknownrori"
							class="flex gap-2 items-center"
						>
							<img
								src={Linkedin}
								alt="Linkedin"
								class="w-20 h-20 object-cover rounded-3xl"
							/>
							<p class="w-fit">@UnknownRori</p>
						</a>
					</li>

					<li>
						<a
							href="https://twitter.com/UnknownRori"
							class="flex gap-2 items-center"
						>
							<img
								src={Twitter}
								alt="Twitter"
								class="w-20 h-20 object-cover rounded-3xl"
							/>
							<p class="w-fit">@UnknownRori</p>
						</a>
					</li>
				</ul>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-itu-web-design">
					Apa sih Web Design itu?
				</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-itu-web-design">
					Apa sih Web Design itu?
				</h1>
				<h2>Sebelumnya kita pecah satu persatu</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="web">Web</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="web">Web</h1>
				<h2>
					Suatu sistem informasi yang memperbolehkan pembagian
					informasi melalui internet
				</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="design">Design</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="design">Design</h1>
				<h2>
					Merupakan konsep atau rancangan yang biasa diterjemahkan
					sebagai seni terapan, arsitektur dan berbagai pencapaian
					kreatif lainnya
				</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="web-design">
					Web Design
				</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="web-design">
					Web Design
				</h1>
				<h2>
					Istilah umum untuk perancangan konten web atau situs halaman
					dan halaman tersebut dapat diakses melalui browser
				</h2>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold">
					Apa yang akan kita buat diakhir semester
				</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<Stretch type="img" src={Hasil1}></Stretch>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<Stretch type="img" src={Hasil2}></Stretch>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<Stretch type="img" src={Hasil3}></Stretch>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<Stretch type="img" src={Hasil4}></Stretch>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-yang-dipelajari">
					Apa yang akan kita pelajari di semester ini
				</h1>

				<div
					class="flex flex-row justify-center items-center gap-4 w-full"
					data-id="list-pelajaran"
				></div>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-yang-dipelajari">
					Apa yang akan kita pelajari di semester ini
				</h1>

				<div
					class="flex flex-row justify-center items-center gap-4 w-full"
					data-id="list-pelajaran"
				>
					<a
						href="https://code.visualstudio.com/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={vscode} alt="vscode" class="w-40 h-40" />
						<h2 class="text-3xl">Visual Studio Code</h2>
					</a>
				</div>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-yang-dipelajari">
					Apa yang akan kita pelajari di semester ini
				</h1>

				<div
					class="flex flex-row justify-center items-center gap-4 w-full"
					data-id="list-pelajaran"
				>
					<a
						href="https://code.visualstudio.com/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={vscode} alt="vscode" class="w-40 h-40" />
						<h2 class="text-3xl">Visual Studio Code</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/HTML/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={html} alt="html" class="w-40 h-40" />
						<h2 class="text-3xl">HTML</h2>
					</a>
				</div>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-yang-dipelajari">
					Apa yang akan kita pelajari di semester ini
				</h1>

				<div
					class="flex flex-row justify-center items-center gap-4 w-full"
					data-id="list-pelajaran"
				>
					<a
						href="https://code.visualstudio.com/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={vscode} alt="vscode" class="w-40 h-40" />
						<h2 class="text-3xl">Visual Studio Code</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/HTML/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={html} alt="html" class="w-40 h-40" />
						<h2 class="text-3xl">HTML</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={css} alt="css" class="w-40 h-40" />
						<h2 class="text-3xl">CSS</h2>
					</a>
				</div>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-yang-dipelajari">
					Apa yang akan kita pelajari di semester ini
				</h1>

				<div
					class="flex flex-row justify-center items-center gap-4 w-full"
					data-id="list-pelajaran"
				>
					<a
						href="https://code.visualstudio.com/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={vscode} alt="vscode" class="w-40 h-40" />
						<h2 class="text-3xl">Visual Studio Code</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/HTML/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={html} alt="html" class="w-40 h-40" />
						<h2 class="text-3xl">HTML</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={css} alt="css" class="w-40 h-40" />
						<h2 class="text-3xl">CSS</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/JavaScript/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={js} alt="js" class="w-40 h-40" />
						<h2 class="text-3xl">JavaScript</h2>
					</a>
				</div>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-6xl font-bold" data-id="apa-yang-dipelajari">
					Apa yang akan kita pelajari di semester ini
				</h1>

				<div
					class="flex flex-row justify-center items-center gap-4 w-full"
					data-id="list-pelajaran"
				>
					<a
						href="https://code.visualstudio.com/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={vscode} alt="vscode" class="w-40 h-40" />
						<h2 class="text-3xl">Visual Studio Code</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/HTML/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={html} alt="html" class="w-40 h-40" />
						<h2 class="text-3xl">HTML</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/Cascading_Style_Sheets/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={css} alt="css" class="w-40 h-40" />
						<h2 class="text-3xl">CSS</h2>
					</a>

					<a
						href="https://id.wikipedia.org/wiki/JavaScript/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={js} alt="js" class="w-40 h-40" />
						<h2 class="text-3xl">JavaScript</h2>
					</a>

					<a
						href="https://figma.com/"
						class="flex flex-col gap-2 p-2 rounded justify-center items-center"
					>
						<img src={figma} alt="figma" class="w-40 h-40" />
						<h2 class="text-3xl">Figma</h2>
					</a>
				</div>
			</Layout>
		</Slide>

		<Slide animate animateId="panic">
			<Layout>
				<h1 class="text-6xl font-bold" data-id="panik">Jangan panik</h1>
			</Layout>
		</Slide>

		<Slide animate animateId="panic">
			<Layout>
				<h1 class="text-6xl font-bold" data-id="panik">Jangan panik</h1>
				<p class="text-3xl" data-id="jelas-pelan">
					Semua akan dijelaskan secara pelan pelan
				</p>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1
					class="text-6xl font-bold font-mono tracking-widest"
					data-id="spoiler"
				>
					Spoiler
				</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h2 class="text-3xl font-bold underline" data-id="proses">
					Semua ada proses dan tidak instan
				</h2>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide>
			<Layout>
				<h1 class="text-6xl font-bold">Materi</h1>
			</Layout>
		</Slide>

		<Slide>
			<Layout>
				<h1 class="text-6xl font-bold">Materi dari extra</h1>
				<p>di share di</p>
				<ul class="flex flex-row gap-8">
					<Step>
						<li class="flex flex-col justify-center items-center">
							<img
								src={Whatsapp}
								alt="whatsapp"
								class="w-20 h-20"
							/>
							<h2 class="text-2xl">Whatsapp</h2>
						</li>
					</Step>

					<Step>
						<li class="flex flex-col justify-center items-center">
							<img
								src={Discord}
								alt="discord"
								class="w-20 h-20"
							/>
							<h2 class="text-2xl">Whatsapp</h2>
						</li>
					</Step>

					<Step>
						<li>
							<a
								class="flex flex-col justify-center items-center"
								href="https://github.com/Extra-Web-Design-SMK-Muh-1-Klaten-Utara/"
							>
								<img
									src={Github}
									alt="github"
									class="w-20 h-20"
								/>
								<h2 class="text-2xl">Github</h2>
							</a>
						</li>
					</Step>
				</ul>
			</Layout>
		</Slide>

		<Slide>
			<Layout>
				<h1 class="text-6xl font-bold">Materi dari internet</h1>
				<ul class="list-disc flex flex-col text-left gap-4">
					<Step>
						<li>Google</li>
					</Step>
					<Step>
						<li>W3School</li>
					</Step>
					<Step>
						<li>dan masih banyak lagi</li>
					</Step>
				</ul>
			</Layout>
		</Slide>
	</Vertical>

	<Slide>
		<Layout>
			<h1 class="text-6xl font-bold">Apakah ada pertanyaan?</h1>
		</Layout>
	</Slide>
</Presentation>
