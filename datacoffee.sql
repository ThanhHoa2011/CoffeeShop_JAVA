--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-10-27 10:40:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 24789)
-- Name: chi_tiet_don_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chi_tiet_don_hang (
    ma_ctdh integer NOT NULL,
    ma_dh integer,
    ma_sp integer,
    so_luong integer,
    don_gia double precision
);


ALTER TABLE public.chi_tiet_don_hang OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 24779)
-- Name: don_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.don_hang (
    ma_dh integer NOT NULL,
    ngay_dat timestamp(6) with time zone,
    tong_tien double precision,
    ma_kh integer
);


ALTER TABLE public.don_hang OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 24732)
-- Name: khach_hang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.khach_hang (
    ma_kh integer NOT NULL,
    ten_kh character varying(255),
    dia_chi character varying(255),
    email character varying(255),
    sdt character varying(255)
);


ALTER TABLE public.khach_hang OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24727)
-- Name: phan_loai; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phan_loai (
    ma_pl integer NOT NULL,
    ten_pl character varying(255)
);


ALTER TABLE public.phan_loai OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24767)
-- Name: san_pham; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.san_pham (
    ma_sp integer NOT NULL,
    ten_sp character varying(255),
    gia double precision,
    mo_ta character varying(255),
    ma_pl integer
);


ALTER TABLE public.san_pham OWNER TO postgres;

--
-- TOC entry 4864 (class 0 OID 24789)
-- Dependencies: 219
-- Data for Name: chi_tiet_don_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chi_tiet_don_hang (ma_ctdh, ma_dh, ma_sp, so_luong, don_gia) FROM stdin;
\.


--
-- TOC entry 4863 (class 0 OID 24779)
-- Dependencies: 218
-- Data for Name: don_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.don_hang (ma_dh, ngay_dat, tong_tien, ma_kh) FROM stdin;
\.


--
-- TOC entry 4861 (class 0 OID 24732)
-- Dependencies: 216
-- Data for Name: khach_hang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.khach_hang (ma_kh, ten_kh, dia_chi, email, sdt) FROM stdin;
1	Thanh Bình	Tây Ninh	binhnguyen0109@gmail.com	026528992
3	Thanh Hòa	Cái Tàu	vothithanhhoa2015@gmail.com	027624278
7	Thanh Phúc	Tây Ninh	tahnahhoa@gmail.com	0388736322
\.


--
-- TOC entry 4860 (class 0 OID 24727)
-- Dependencies: 215
-- Data for Name: phan_loai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.phan_loai (ma_pl, ten_pl) FROM stdin;
1	Coffee pha san
2	Coffee pha phin
\.


--
-- TOC entry 4862 (class 0 OID 24767)
-- Dependencies: 217
-- Data for Name: san_pham; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.san_pham (ma_sp, ten_sp, gia, mo_ta, ma_pl) FROM stdin;
6	Cà phê muối	87000	dsvbfdv	1
8	Cà phê Moka	154000	bcbcvbvc	2
12	Cà phê Moka	56000	ngon	2
\.


--
-- TOC entry 4712 (class 2606 OID 24793)
-- Name: chi_tiet_don_hang chi_tiet_don_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chi_tiet_don_hang
    ADD CONSTRAINT chi_tiet_don_hang_pkey PRIMARY KEY (ma_ctdh);


--
-- TOC entry 4710 (class 2606 OID 24783)
-- Name: don_hang don_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.don_hang
    ADD CONSTRAINT don_hang_pkey PRIMARY KEY (ma_dh);


--
-- TOC entry 4706 (class 2606 OID 24738)
-- Name: khach_hang khach_hang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.khach_hang
    ADD CONSTRAINT khach_hang_pkey PRIMARY KEY (ma_kh);


--
-- TOC entry 4704 (class 2606 OID 24731)
-- Name: phan_loai phan_loai_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phan_loai
    ADD CONSTRAINT phan_loai_pkey PRIMARY KEY (ma_pl);


--
-- TOC entry 4708 (class 2606 OID 24773)
-- Name: san_pham san_pham_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.san_pham
    ADD CONSTRAINT san_pham_pkey PRIMARY KEY (ma_sp);


--
-- TOC entry 4715 (class 2606 OID 24794)
-- Name: chi_tiet_don_hang chi_tiet_don_hang_ma_dh_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chi_tiet_don_hang
    ADD CONSTRAINT chi_tiet_don_hang_ma_dh_fkey FOREIGN KEY (ma_dh) REFERENCES public.don_hang(ma_dh);


--
-- TOC entry 4716 (class 2606 OID 24799)
-- Name: chi_tiet_don_hang chi_tiet_don_hang_ma_sp_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chi_tiet_don_hang
    ADD CONSTRAINT chi_tiet_don_hang_ma_sp_fkey FOREIGN KEY (ma_sp) REFERENCES public.san_pham(ma_sp);


--
-- TOC entry 4714 (class 2606 OID 24784)
-- Name: don_hang don_hang_ma_kh_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.don_hang
    ADD CONSTRAINT don_hang_ma_kh_fkey FOREIGN KEY (ma_kh) REFERENCES public.khach_hang(ma_kh);


--
-- TOC entry 4713 (class 2606 OID 24774)
-- Name: san_pham san_pham_ma_pl_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.san_pham
    ADD CONSTRAINT san_pham_ma_pl_fkey FOREIGN KEY (ma_pl) REFERENCES public.phan_loai(ma_pl);


-- Completed on 2024-10-27 10:40:05

--
-- PostgreSQL database dump complete
--

