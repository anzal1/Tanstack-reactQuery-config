import { apiClient } from '@/apiConfig';

// This file contains the API endpoints for the application

/**
 * Example endpoint function that fetches user data.
 * @param userId - The ID of the user to fetch data for.
 * @returns A Promise that resolves to the user data.
 */
export const getUserData = async (userId: string): Promise<UserData> => {
  // Make a GET request to the API endpoint
  const response = await apiClient.get(`/users/${userId}`);

  // Return the user data from the response
  return response.data;
};

/**
 * Example endpoint function that updates user data.
 * @param userId - The ID of the user to update data for.
 * @param newData - The new data to update for the user.
 * @returns A Promise that resolves to the updated user data.
 */
export const updateUserData = async (userId: string, newData: UserData): Promise<UserData> => {
  // Make a PUT request to the API endpoint with the new data
  const response = await apiClient.put(`/users/${userId}`, newData);

  // Return the updated user data from the response
  return response.data;
};

// Define the shape of the user data
interface UserData {
  id: string;
  name: string;
  email: string;
  // Add more properties as needed
}
