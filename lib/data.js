import got from 'got';

const baseURL = "https://dev-cs5513-week14-2023.pantheonsite.io/wp-json/2023-child/v1/special";


export async function getAllIds(postType = 'cat_breeds') {
  const url = `${baseURL}?post_type=${postType}`;
  let jsonString;

  try {
    jsonString = await got(url);
  } catch (error) {
    console.error(error);
    jsonString.body = [];
  }

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    };
  });
}





export async function getSortedList(postType = 'cat_breeds') {
  const url = `${baseURL}?post_type=${postType}`;
  let jsonString;

  try {
    jsonString = await got(url);
  } catch (error) {
    console.error(error);
    return [];
  }

  const jsonObj = JSON.parse(jsonString.body);
  const posts = {};

  jsonObj.forEach(item => {
    if (!posts[item.ID]) {
      posts[item.ID] = {
        id: item.ID,
        title: item.post_title,
        meta: {}
      };
    }
    posts[item.ID].meta[item.meta_key] = item.meta_value;
  });

  const sortedPosts = Object.values(posts).sort((a, b) => 
    a.title.localeCompare(b.title)
  );

  return sortedPosts.map(post => {
    return {
      id: post.id.toString(),
      name: post.title
    };
  });
}

export async function getData(postType = 'cat_breeds', idRequested) {
  const url = `${baseURL}?post_type=${postType}`;
  let jsonString;

  try {
    jsonString = await got(url);
  } catch (error) {
    console.error(error);
    return {};
  }

  const jsonObj = JSON.parse(jsonString.body);

  // Find the post with the matching ID
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  // Return the matched post or an empty object if not found
  return objMatch.length > 0 ? objMatch[0] : {};
}





