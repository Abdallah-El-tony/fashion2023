/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useFetch from './useFetch';
import SingleProduct from '../components/apps/SingleProduct';
import BlogItem from '../components/apps/BlogItem';
import TeamCard from '../components/apps/TeamCard';
import TestimonialCard from '../components/apps/TestimonialCard';

export function useSplitFeaturedProducts() {
  const { data, fetchData } = useFetch();
  const featuredProduct = [];

  useEffect(() => {
    fetchData('http://localhost:3000/FeaturedProducts');
  }, []);

  for (let i = 1; i <= data.length - 1; i++) {
    featuredProduct.push(
      <SingleProduct
        product={data[i]}
        index={data[i].id}
        key={i}
        name={data[i].name}
        img={data[i].img}
        sales={data[i].sales}
        offer={data[i].offer}
        price={data[i].price}
        altPrice={data[i].altPrice}
        rating={data[i].rating}
        color={data[i].color}
      />
    );
  }

  return featuredProduct;
}
export function useSplitFlashProducts() {
  const { data, fetchData } = useFetch();
  const flashProducts = [];

  useEffect(() => {
    fetchData('http://localhost:3000/FlashProducts');
  }, []);

  for (let i = 0; i <= data.length -1 ; i++) {
    flashProducts.push(
      <SingleProduct
        product={data[i]}
        index={data[i].id}
        key={i}
        name={data[i].name}
        img={data[i].img}
        sales={data[i].sales}
        offer={data[i].offer}
        price={data[i].price}
        altPrice={data[i].altPrice}
        rating={data[i].rating}
        color={data[i].color}
      />
    );
  }

  return flashProducts;
}

export function useSplitBlogs() {
  const { data, fetchData } = useFetch();
  const blogs = [];

  useEffect(() => {
    fetchData('http://localhost:3000/Blogs');
  }, []);

  for (let i = 1; i <= data.length - 1; i++) {
    blogs.push(
      <BlogItem
        flag="slider"
        key={i}
        name={data[i].name}
        img={data[i].img}
        category={data[i].catigory}
        comments={data[i].comments}
        date={data[i].date}
      />
    );
  }

  return blogs;
}

export function useSplitClients() {
  const { data, fetchData } = useFetch();
  const clients = [];

  useEffect(() => {
    fetchData('  http://localhost:3000/Clients');
  }, []);

  for (let i = 1; i <= data.length - 1; i++) {
    clients.push(
      <TestimonialCard
        key={i}
        clientName={data[i].clientName}
        avatar={data[i].avatar}
        feedback={data[i].feedback}
        rate={data[i].rate}
      />
    );
  }

  return clients;
}

export function useSplitTeam() {
  const { data, fetchData } = useFetch();
  const team = [];

  useEffect(() => {
    fetchData('http://localhost:3000/Team');
  }, []);

  for (let i = 1; i <= data.length - 1; i++) {
    team.push(
      <TeamCard
        key={i}
        person={data[i].person}
        name={data[i].name}
        job={data[i].job}
      />
    );
  }

  return team;
}
