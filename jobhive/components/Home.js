import React from "react";
import { Box, Image, HStack, Center, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {

    const nav = useNavigation()

    return (

        <ScrollView p="7" >



            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"

            >
                <TouchableOpacity
                    //linkedin
                    onPress={() => nav.navigate('Home', { url: "https://linkedin.com" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/linkedin2.jpg")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //upwork
                    onPress={() => nav.navigate('Home', { url: "https://upwork.com" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Center>
                            <Image
                                source={require("../assets/upwork.png")} // Replace with the actual path to your image icon
                                style={{ height: 70, width: 80 }}
                                alt="Icon"
                                size={20} // Adjust the size of the image icon
                                mr={2} // Margin to separate the image and text
                            />
                        </Center>

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //fiverr
                    onPress={() => nav.navigate('Home', { url: "https://www.fiverr.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/fiverr.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

            </HStack>



            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"
            >

                <TouchableOpacity
                    //codeable 
                    onPress={() => nav.navigate('Home', { url: "https://www.codeable.io" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/codeable.webp")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //designcrowd
                    onPress={() => nav.navigate('Home', { url: "https://www.designcrowd.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/designcrowd.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //designhill
                    onPress={() => nav.navigate('Home', { url: "https://www.designhill.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/designhill.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>



            </HStack>

            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"
            >
                <TouchableOpacity
                    //guru
                    onPress={() => nav.navigate('Home', { url: "https://www.guru.com/d/jobs/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/guru.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //freelancer
                    onPress={() => nav.navigate('Home', { url: "https://www.freelancer.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/freelancer.jpeg")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />


                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //myjobgator
                    onPress={() => nav.navigate('Home', { url: "https://www.myjobgator.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/myjobgator.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>




            </HStack>

            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"
            >
                <TouchableOpacity
                    //peopleperhour
                    onPress={() => nav.navigate('Home', { url: "https://www.peopleperhour.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/peopleperhour.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //servicesscape
                    onPress={() => nav.navigate('Home', { url: "https://www.servicescape.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/servicescape.jpeg")} // Replace with the actual path to your image 
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //dribbble
                    onPress={() => nav.navigate('Home', { url: "https://dribbble.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/dribbble.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>






            </HStack>


            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"
            >
                <TouchableOpacity
                    //weworkremotely
                    onPress={() => nav.navigate('Home', { url: "https://weworkremotely.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/weworkremotely.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //SH
                    onPress={() => nav.navigate('Home', { url: "https://www.simplyhired.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/simplyhired.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //solidgigs
                    onPress={() => nav.navigate('Home', { url: "https://solidgigs.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/solidgigs.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

            </HStack>


            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"
            >
                <TouchableOpacity
                    //flexjobs
                    onPress={() => nav.navigate('Home', { url: "https://www.flexjobs.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/flexjobs.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //99designs
                    onPress={() => nav.navigate('Home', { url: "https://99designs.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/99designs.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>


                <TouchableOpacity
                    //Behance
                    onPress={() => nav.navigate('Home', { url: "https://www.behance.net/joblist?tracking_source=nav20" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/behance.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

            </HStack>


            <HStack
                alignItems="center"
                justifyContent="space-between"
                my="4"
            >
                <TouchableOpacity
                    //Ziprecruiter
                    onPress={() => nav.navigate('Home', { url: "https://www.ziprecruiter.com/jobs-search?location=Nairobi,%20KE" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/ziprecruiter.png")}
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

                <TouchableOpacity
                    //indeed
                    onPress={() => nav.navigate('Home', { url: "https://www.indeed.com/career/salaries?from=gnav-homepage" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/indeedlg.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>


                <TouchableOpacity
                    //snagajob
                    onPress={() => nav.navigate('Home', { url: "https://www.snagajob.com/" })}
                >
                    <Center
                        bg="white"
                        py="4"
                        px="2"
                        rounded="lg"
                    >
                        <Image
                            source={require("../assets/snagjob.png")} // Replace with the actual path to your image icon
                            style={{ height: 70, width: 80 }}
                            alt="Icon"
                            size={20} // Adjust the size of the image icon
                            mr={2} // Margin to separate the image and text
                        />

                    </Center>

                </TouchableOpacity>

            </HStack>

            <Box p="10">

            </Box>


        </ScrollView>
    );
}
