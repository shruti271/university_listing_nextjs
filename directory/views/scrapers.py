from django.shortcuts import render
from bs4 import BeautifulSoup
from django.http import HttpResponse
from urllib.request import Request, urlopen
from selenium import webdriver
import requests
from selenium.webdriver.chrome.options import Options

def collectData(request):
    
    path = '/Users/mohamed/Downloads/chromedriver'
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(executable_path=path,
                              chrome_options=chrome_options
                             )

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
    response = requests.get('https://www.timeshighereducation.com/sites/default/files/the_data_rankings/world_university_rankings_2022_0__e7070f0c2581be5fe6ab6392da206b36.json', headers=headers)

    data = response.json()
    #print(data['data'][0]['rank'])
    for u in data['data'][:20]:
        desc = ''
        url = "https://www.timeshighereducation.com" + u['url']
        
        browser.get(url)
        soup = BeautifulSoup(browser.page_source, "lxml")
        results = soup.find('div', {'class': 'read-more-processed'})
        if results is not None: 
            parags = results.find_all('p')
            if parags is not None:
                for p in parags:
                    desc = desc + ' ' + p.text

        University.objects.get_or_create(name = u['name'], rank=u['rank'], rank_order=u['rank_order'], description = desc, institute_type = '', campus_settings = '' , student_body_size = u['stats_number_students'].replace(',', ''), prince_range ='', scores_overall = u['scores_overall'], scores_teaching = u['scores_teaching'], scores_teaching_rank = u['scores_teaching_rank'], scores_research = u['scores_research'], scores_citations = u['scores_citations'], scores_industry_income = u['scores_industry_income'], scores_industry_income_rank = u['scores_industry_income_rank'], scores_international_outlook = u['scores_international_outlook'], scores_international_outlook_rank = u['scores_international_outlook_rank'], location = u['location'], city='', stats_student_staff_ratio = u['stats_student_staff_ratio'], stats_pc_intl_students = u['stats_pc_intl_students'], stats_female_male_ratio = u['stats_female_male_ratio'], subjects_offered = u['subjects_offered'], closed = u['closed'], unaccredited = u['unaccredited'])

    return HttpResponse('data')

def collectScholarships(request):
    path = '/Users/mohamed/Downloads/chromedriver'
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(executable_path=path,
                              chrome_options=chrome_options
                             )

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
    #response = requests.get('https://www.internationalscholarships.com/scholarships', headers=headers)
    url_number = "https://www.internationalscholarships.com/scholarships?per-page=30"
    url = "https://www.internationalscholarships.com/scholarships"
        
    browser.get(url_number)
    soup = BeautifulSoup(browser.page_source, "lxml")

    results = soup.find_all('tr', {'class': ''})
    #print(results)
    # for r in results:
    #     print(r.find_all('td'))

    

    import requests

    cookies = {
        '__gads': 'ID=a823a139bae56e82-224977dd18d40014:T=1656680701:RT=1656680701:S=ALNI_MYe9lYqo39BYO1MrIjbZ6tUgx_xzw',
        'cookieconsent_status': 'dismiss',
        '__gpi': 'UID=000009875f769037:T=1656680701:RT=1657272966:S=ALNI_Mb9Fnc8sLWPDYkjZ9wA20vqwVL0dA',
        '_gid': 'GA1.2.1806460644.1657272967',
        '_gat_UA-12565915-9': '1',
        'PHPSESSID': '696f65b672e42d8809ece4586c230bb9',
        '_csrf': 'b6ac7bddf45a2e00f7a34963eb8bb2070c3fd86c36067d9a6cb74824cea1793ea%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22C6niMZMAh3lJoUBsVtfPfkc0At6E3PRE%22%3B%7D',
        '_ga_KXQ425PMLX': 'GS1.1.1657272967.12.1.1657272985.0',
        '_ga': 'GA1.1.2120178691.1656680701',
    }

    headers = {
        'authority': 'www.internationalscholarships.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en,en-US;q=0.9,fr;q=0.8',
        'cache-control': 'max-age=0',
        # Requests sorts cookies= alphabetically
        # 'cookie': '__gads=ID=a823a139bae56e82-224977dd18d40014:T=1656680701:RT=1656680701:S=ALNI_MYe9lYqo39BYO1MrIjbZ6tUgx_xzw; cookieconsent_status=dismiss; __gpi=UID=000009875f769037:T=1656680701:RT=1657272966:S=ALNI_Mb9Fnc8sLWPDYkjZ9wA20vqwVL0dA; _gid=GA1.2.1806460644.1657272967; _gat_UA-12565915-9=1; PHPSESSID=696f65b672e42d8809ece4586c230bb9; _csrf=b6ac7bddf45a2e00f7a34963eb8bb2070c3fd86c36067d9a6cb74824cea1793ea%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22C6niMZMAh3lJoUBsVtfPfkc0At6E3PRE%22%3B%7D; _ga_KXQ425PMLX=GS1.1.1657272967.12.1.1657272985.0; _ga=GA1.1.2120178691.1656680701',
        'referer': 'https://www.internationalscholarships.com/login',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    }


    for r in results[1:]:
        tds = r.find_all('td')[0]

        link0 = tds.find('a').get('href')
        print(link0)
            
        response = requests.get(url + link0, cookies=cookies, headers=headers)
        detail_soup = BeautifulSoup(response.content, "html.parser")
        title = detail_soup.find('h1', {'class': 'title'})
    

        div_desc = detail_soup.find('div', {'class': 'award-description'})

        #description
        description = div_desc.find_all('p')[0].text

        #moreinfo
        try:
            more_info = div_desc.find_all('p')[1].text
        except:
            more_info = None
        
        list_extra = detail_soup.find_all('div', {'class': "clear {class}"})
        list_indxs = []
        list_items = []

        for i in list_extra:
            list_indxs.append(i.find('h4').text)
            list_items.append(i.find('p').text)

        dictionary = dict(zip(list_indxs,list_items))
        print(dictionary)
        amount = dictionary['Amount'] if 'Amount' in dictionary else None
        application_deadline = dictionary['Deadline'] if 'Deadline' in dictionary else None
        nationality_requirements = dictionary['You must be studying in one of the following countries:'] if 'You must be studying in one of the following countries:' in dictionary else None
        award_ammount = dictionary['Number of Awards'] if 'Number of Awards' in dictionary else None

        applicable_majors = dictionary['You must be studying one of the following:'] if 'You must be studying one of the following:' in dictionary else None
        host_institution = dictionary['Host Institution'] if 'Host Institution' in dictionary else None
        includes = dictionary['Includes'] if 'Includes' in dictionary else None

        list_indxs_contact = []
        list_items_contact = []
        contact = detail_soup.find('table', {'id': 'w4'})
        indexes_contact = contact.find_all('th')
        contact_info = contact.find_all('td')

        for i in contact_info:
            if i.text == 'View Website':
                list_items_contact.append(i.find('a').get('href'))
            else:
                list_items_contact.append(i.text)

        for i in indexes_contact:
            list_indxs_contact.append(i.text)

        contact_dictionary = dict(zip(list_indxs_contact,list_items_contact))

        contact_name = contact_dictionary['Contact Name'] if 'Contact Name' in contact_dictionary else None
        address = contact_dictionary['Address'] if 'Address' in contact_dictionary else None
        phone = contact_dictionary['Phone'] if 'Phone' in contact_dictionary else None
        email = contact_dictionary['E-mail'] if 'E-mail' in contact_dictionary else None
        fax = contact_dictionary['Fax'] if 'Fax' in contact_dictionary else None
        link = contact_dictionary['Link'] if 'Link' in contact_dictionary else None


        admin = User.objects.get(username='admin')
        scholarship, created = Scholarship.objects.get_or_create(
            name = title.text.strip(),
            user = admin,
            description = description,
            more_info = more_info,
            #location,
            #gender,
            award_ammount = amount,
            application_deadline = application_deadline,
            nationality_requirements = nationality_requirements,
            applicable_majors = applicable_majors,
            host_institution = host_institution,
            includes = includes,
            contact_name = contact_name,
            address = address,
            phone = phone,
            email = email,
            link = link,
        )


    return HttpResponse('scholarships done')

from urllib.request import urlopen as uReq, Request
#from seleniumwire import webdriver
import undetected_chromedriver as uc
from fake_useragent import UserAgent



def loadMasters(request):
    path = '/Users/mohamed/Downloads/chromedriver'
    
    options = webdriver.ChromeOptions() 
    options.add_argument("--headless")
    browser = uc.Chrome(options=options)
    url = "https://www.mastersportal.com/search/master?page=1"
    browser.get(url)

    # response = requests.get(url, headers=headers)

    soup = BeautifulSoup(browser.page_source, "lxml")
    ul = soup.find('ul', {'class':'SearchResultsList'})
    lis = ul.find_all('li', {'class':'HoverEffect SearchResultItem'})[0]
    a = lis.find('a', {'class':'SearchStudyCard js-bestFitStudycard'}).get('href')
    # results = soup.find_all('a', {'class': 'SearchStudyCard js-bestFitStudycard'})
    print(a)

    options_ = webdriver.ChromeOptions() 
    options_.add_argument("--headless")
    browser_ = uc.Chrome(options=options_)
    url_ = a
    browser_.get(url_)
    soup_ = BeautifulSoup(browser_.page_source, "lxml")
    div = soup_.find('div', {'class':'NameLocation'})
    univ_link = div.find('a', {'class': 'Name TextLink Connector js-organisation-info-link'}).get('href')
    print(univ_link)

    # req = Request(url,headers=headers)
    # page = uReq(req)
    # page_soup = BeautifulSoup(page)
    # print(page_soup)

    return HttpResponse('masters done')